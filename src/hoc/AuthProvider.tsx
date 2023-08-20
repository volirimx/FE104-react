import { createContext, useContext, useState } from "react";
import { UserFormData} from "..//components/Forms/signinForm";


export interface AuthContextType {
    user: UserFormData | null;
    signin: (newUser: UserFormData, callback: () => void) => void;
    signout: (callback: () => void) => void;
  }


export const AuthContext = createContext<AuthContextType | null>(null);


export const AuthProvider = ({children}: {children: React.ReactNode}) => {
    const [user, setUser] = useState<UserFormData | null>(null);

    const signin = (newUser: UserFormData, callback: () => void) => {
        setUser(newUser);
        callback();
    };

    const signout = (callback: () => void) => {
        setUser(null);
        callback();
    };

    const value: AuthContextType = {user, signin, signout}

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}