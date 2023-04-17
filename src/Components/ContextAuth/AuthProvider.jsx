import React, { createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from '../config/firebaseConfig';
export  const AuthContext=createContext();

const AuthProvider = ({children}) => {
    const auth=getAuth(app);
    const signUp=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const shareValue={
        signUp
    }

    return (
        <div>
            <AuthContext.Provider value={shareValue}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;