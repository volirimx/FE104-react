import React, { createContext, useState } from "react";
import { UserFormData} from "..//components/Forms/signinForm";


export interface AuthContextType {
    user: UserFormData;
    signin: (newUser: UserFormData, callback: () => void) => void;
    signout: (callback: () => void) => void;
  }


export const AuthContext = createContext<AuthContextType>({
    user: {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    },
    signin: () => {},
    signout: () => {}
  });


export const AuthProvider = ({children}: {children: React.ReactNode}) => {
    const [user, setUser] = useState<UserFormData>({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const signin = (newUser: UserFormData, callback: () => void) => {
        setUser(newUser);
        callback();
    };

    const signout = (callback: () => void) => {
        setUser({
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
        });
        callback();
    };

    const value: AuthContextType = {user, signin, signout}

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}