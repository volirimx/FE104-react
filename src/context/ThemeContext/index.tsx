import { useState, useContext, createContext } from 'react';

type ThemeValue = 'light' | 'dark';
type ThemeContextDataValue = {
    theme: ThemeValue;
    changeTheme: (theme: ThemeValue) => void;
}
const defaultThemeContextValue: ThemeContextDataValue = {
    theme: 'light',
    changeTheme: () => { }
}
export const useInitThemeContext = () => {
    const [theme, setTheme] = useState<ThemeValue>('light');
    const changeTheme = (newTheme: ThemeValue) => {
        setTheme(() => newTheme);
    }
    return {
        theme,
        changeTheme
    }
}
export const ThemeContext = createContext<ThemeContextDataValue>(defaultThemeContextValue);
export const useThemeContext = () => {
    const useThemeContext = useContext(ThemeContext);
    return useThemeContext;
}