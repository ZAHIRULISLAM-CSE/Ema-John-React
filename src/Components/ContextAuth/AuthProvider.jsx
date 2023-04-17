import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import app from "../config/firebaseConfig";
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [user,setUser]=useState({});

  const auth = getAuth(app);
  //signup with email and password
  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //handle login
  const login = (email, passWord) => {
    return signInWithEmailAndPassword(auth, email, passWord);
  };

  //manage current user 
  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });
        return ()=>unsubscribe();
  },[])

  const logOut=()=>{
    return signOut(auth);
  }



  const shareValue = {
    signUp,login,user,logOut,
  };

  return (
    <div>
      <AuthContext.Provider value={shareValue}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
