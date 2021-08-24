
import React, {useState, useEffect, useContext, createContext } from "react";
import { auth, signInWithGoogle } from "../firebase/firebase";
import { useHistory } from "react-router-dom";
import useLocalStorage from "./helpers/useLocalStorage";
export const LoginUserContext = createContext();
export const LoginUserUpdateContext = createContext();
export const LoginStateContext = createContext();
export const LogoutUserContext = createContext();

export function useLogin() {
    return useContext(LoginUserContext);
}

export function useLoginUpdate() {
    return useContext(LoginUserUpdateContext);
}

export function useLoginState() {
  return useContext(LoginStateContext);
}

export function useLogout() {
    return useContext(LogoutUserContext);
}

export function LoginProvider({ children}) {

const [isLoggedIn, setIsLoggedIn] = useState(false);
const [displayName, setDisplayName] = useLocalStorage('name', '');


let history = useHistory();

  function checkLoginState() {
      auth.onAuthStateChanged((user) => {
        if (user) {
          let userobj = user;
          setIsLoggedIn(true);
          setDisplayName(userobj["displayName"]);
          window.localStorage
          history.push("/dashboard");
        } else {
          console.log("LOGIN: User is signed out");
          setIsLoggedIn(false);
          console.log("LOGGEDOUT:: " + setIsLoggedIn);
          console.log("LOGGEDOUTX:: " + isLoggedIn);
          history.push("/login");
          return signInWithGoogle();
        }
      });
    }

    function onLogOut(e) {
        auth.signOut().then(() => {
            console.log("logged out");
            setIsLoggedIn(false);
            return history.push("/login");
        }).catch((error) => {
            console.log("logged out error: ", error);
        })
      }

    return (
        <LoginUserContext.Provider value={checkLoginState}>
            <LoginStateContext.Provider value={displayName}>

            {/* <LoginUserUpdateContext.Provider value={checkLoginState} > */}
                <LogoutUserContext.Provider value={onLogOut} >
                    { children }
                </LogoutUserContext.Provider>
            {/* </LoginUserUpdateContext.Provider> */}
            </LoginStateContext.Provider>
        </LoginUserContext.Provider>
    )

}