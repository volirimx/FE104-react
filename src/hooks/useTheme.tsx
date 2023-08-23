import { ThemeContext } from "../providers/ThemeProvider"
import { useContext } from "react";

export const useTheme = () => {
    const value = useContext(ThemeContext);
    return value;
}