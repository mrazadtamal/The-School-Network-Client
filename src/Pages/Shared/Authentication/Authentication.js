import initializationFirebase from "../../../FirebaseSetup/FirebaseInit";
import { useEffect, useState } from "react";
import {
  signOut,
  onAuthStateChanged,
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

initializationFirebase();

const useFirebase = () => {
  const [user, setUser] = useState({}); 
  const auth = getAuth();
  const [isloading, setIsloading] = useState(true)

  //registering user
  const RegisterUser = (email, password) => {
    setIsloading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //Login user
  const LoginUser = (email, password, role) => {
    setIsloading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  //geting current user
  useEffect(() => {
    setIsloading(true)
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        // ...
        setUser(user);
      } else {
        // User is signed out
        // ...
        setUser({});
      }
      setIsloading(false)
    });
  }, [auth]);

  //user Log out
  const LogOutUser = (navigate) => {
    signOut(auth)
      .then(() => {
        setUser({});
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return {
    setUser,
    user,
    RegisterUser,
    LoginUser,
    LogOutUser,
    setIsloading,
    isloading
  };
};

export default useFirebase;
