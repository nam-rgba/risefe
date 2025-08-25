
import { Theme } from "@/types/theme.type";
import { useCallback, useEffect, useState } from "react";

const THEME_KEY = "theme_mode";

export const useTheme = ()=>{
    const [theme, setTheme] = useState<Theme>("light");

      // Áp dụng class lên <html>
  const applyThemeClass = useCallback((mode: Theme) => {
    const root = document.documentElement;

    root.classList.remove("theme-light", "theme-dark");
    root.classList.add(`theme-${mode}`);
  }, []);

  // Thay đổi theme
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem(THEME_KEY, newTheme);
    applyThemeClass(newTheme);
  };

  const changeTheme = (mode: Theme) => {
    setTheme(mode);
    localStorage.setItem(THEME_KEY, mode);
    applyThemeClass(mode);
  };

    useEffect(() => {
    const storedTheme = localStorage.getItem(THEME_KEY) as Theme | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    const initialTheme = storedTheme || (prefersDark ? "dark" : "light");
    setTheme(initialTheme);
    applyThemeClass(initialTheme);
  }, [applyThemeClass]);

    return {
    theme,
    toggleTheme,
    changeTheme,
    isDark: theme === "dark",
    isLight: theme === "light",
  };
}

