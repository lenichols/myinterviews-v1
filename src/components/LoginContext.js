
import React, {useState, useEffect, useContext, createContext } from "react";
import { auth, signInWithGoogle } from "../firebase/firebase";
import { useHistory } from "react-router-dom";
export const LoginUserContext = createContext();
export const LoginUserUpdateContext = createContext();
export const LogoutUserContext = createContext();

export function useLogin() {
    return useContext(LoginUserContext);
}

export function useLoginUpdate() {
    return useContext(LoginUserUpdateContext);
}

export function useLogout() {
    return useContext(LogoutUserContext);
}

export function LoginProvider({ children}) {

const [isLoggedIn, setIsLoggedIn] = useState(false);
const [displayName, setDisplayName] = useState('');
let history = useHistory();

  function checkLoginState() {
      auth.onAuthStateChanged((user) => {
        if (user) {
          let userobj = user;
          setIsLoggedIn(true);
          setDisplayName(userobj["displayName"]);
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

    function getLoginState() {
        console.log("calleed login state");
        auth.onAuthStateChanged((user) => {
          if (user) {
            let userobj = user;
            setIsLoggedIn(true);
            setDisplayName(userobj["displayName"]);
            history.push("/dashboard");
          } else {
            setIsLoggedIn(false);
            // return signInWithGoogle();
  
          }
        });
      }

    function onLogOut(e) {
        auth.signOut().then(() => {
            console.log("logged out");
            setIsLoggedIn(false);
            //return history.push("/login");
        }).catch((error) => {
            console.log("logged out error: ", error);
        })
      }

    return (
        <LoginUserContext.Provider value={checkLoginState}>
            {/* <LoginUserUpdateContext.Provider value={checkLoginState} > */}
                <LogoutUserContext.Provider value={onLogOut} >
                    { children }
                </LogoutUserContext.Provider>
            {/* </LoginUserUpdateContext.Provider> */}
        </LoginUserContext.Provider>
    )

}