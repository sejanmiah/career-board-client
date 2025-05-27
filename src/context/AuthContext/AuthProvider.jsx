import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase/firebase-init";

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, SetUsers] = useState(null);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signinUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signOutUser = () => {
    setLoading(true);
    return signOut(auth)
  }



  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUSer) => {
      SetUsers(currentUSer);
      setLoading(false);
    });
    return () => {
        unsubscribe();
    }
  });

  const AuthInfo = {
    loading,
    createUser,
    signinUser,
    user,
    signOutUser,
  };
  return <AuthContext value={AuthInfo}>{children}</AuthContext>;
};

export default AuthProvider;
