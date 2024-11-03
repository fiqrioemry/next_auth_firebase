"use client";

import { auth } from "@/components/firebase";
import Header from "@/components/Header";
import LoadingPage from "@/components/LoadingPage";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { createContext, useContext, useEffect, useState } from "react";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  const googleSignOut = () => {
    signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setLoading(false);
      setUser(currentUser);
    });
    return () => unsubscribe();
  });

  return (
    <GlobalContext.Provider
      value={{ user, loading, googleSignIn, googleSignOut }}
    >
      {loading ? (
        <>
          <Header />
          <LoadingPage />
        </>
      ) : (
        <>{children}</>
      )}
    </GlobalContext.Provider>
  );
};

export const AuthUser = () => {
  return useContext(GlobalContext);
};
