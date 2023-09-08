import { ThemeContext } from "../providers/ThemeProvider"
import { useContext } from "react";
import { useEffect } from "react";

export const useTheme = () => {
    const value = useContext(ThemeContext);
    return value;
}

// export const useUpdateTokens = () => {
//     useEffect(() => {
//         const interval = setInterval(() => {
          
//         }, 270000);
//         return () => clearInterval(interval);
//     }, []);
// }


