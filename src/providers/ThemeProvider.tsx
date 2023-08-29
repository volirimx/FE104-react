import { createContext, useState, ReactNode, Dispatch, SetStateAction, useMemo } from "react";

type TypeSetState<T> = Dispatch<SetStateAction<T>>;

type themeType = "Light" | "Dark";

interface IContext {
    type: themeType;
    setType: TypeSetState<themeType>;
}

export const ThemeContext = createContext<IContext>({
    type: "Light", 
    setType: () => {} 
});

export const ThemeProvider = ({ children }:  { children: ReactNode }) => {
    const [type, setType] = useState<themeType>("Light");

    const value = useMemo(() => ({type, setType }), [type]);

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};
