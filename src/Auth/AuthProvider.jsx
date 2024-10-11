import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";

// creating context
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // states
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);

  // google provider
  const googleProvider = new GoogleAuthProvider();
  const GithubProvider = new GithubAuthProvider();

  // Email Authintication
  // create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // update user
  const updateUser = (name, photo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  // login user
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // logout user
  const logoutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  // Google Authintication
  const googleAuthintication = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // Github Authintication
  const githubAuthintication = () => {
    setLoading(true);
    return signInWithPopup(auth, GithubProvider);
  };

  // state observer
  useEffect(() => {
    const onSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(currentUser);
      setLoading(false);
    });

    return () => {
      return onSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    updateUser,
    loginUser,
    logoutUser,
    googleAuthintication,
    githubAuthintication,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
