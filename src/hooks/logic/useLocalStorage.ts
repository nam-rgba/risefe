import { useCallback, useEffect, useState } from "react"


export const useLocalStorage = <T>(key: string, initValue: T) => {

    const readValue = useCallback((): T => {
        if (typeof window === "undefined") return initValue;

        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) as T : initValue;
        } catch (error) {
            console.warn(`Error reading localStorage key "${key}":`, error);
            return initValue;
        }
    }, [key, initValue])

    const [storedValue, setStoredValue] = useState<T>(readValue);

    const setValue = useCallback(
        (value: T | ((val: T) => T)) => {
            try {
                const newValue = value instanceof Function ? value(storedValue) : value;
                setStoredValue(newValue);
                if (typeof window !== "undefined") {
                    window.localStorage.setItem(key, JSON.stringify(newValue));
                }
            } catch (error) {
                console.warn(`Error setting localStorage key "${key}":`, error);
            }
        },
        [key, storedValue]
    );

    useEffect(() => {
        setStoredValue(readValue());
    }, [readValue]);
    
    return [storedValue, setValue] as const;
}