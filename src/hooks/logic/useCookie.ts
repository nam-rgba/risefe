import { useState, useCallback } from "react";

const getCookie = <T>(name: string, defaultValue: T): T => {
  if (typeof document === "undefined") return defaultValue;

  const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
  if (match) {
    try {
      return JSON.parse(decodeURIComponent(match[2])) as T;
    } catch {
      return match[2] as unknown as T;
    }
  }

  return defaultValue;
};

const setCookie = <T>(name: string, value: T, days = 7) => {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  const stringValue =
    typeof value === "string" ? value : encodeURIComponent(JSON.stringify(value));

  document.cookie = `${name}=${stringValue}; expires=${expires}; path=/`;
};

const deleteCookie = (name: string) => {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
};

export const useCookie = <T>(name: string, defaultValue: T, days = 7) => {
  const [value, setValueState] = useState<T>(() => getCookie(name, defaultValue));

  const setValue = useCallback(
    (newValue: T) => {
      setValueState(newValue);
      setCookie(name, newValue, days);
    },
    [name, days]
  );

  const deleteValue = useCallback(() => {
    deleteCookie(name);
    setValueState(defaultValue);
  }, [name, defaultValue]);

  return [value, setValue, deleteValue] as const;
};
