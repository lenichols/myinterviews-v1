import React, {useState, useEffect} from "react";
import { Link, Redirect } from "@reach/router";
import { signInWithGoogle, auth } from "../firebase/firebase";
import firebase from "firebase/app";
import Dashboard from "./Dashboard";

const SignIn = () => {
    const [displayName, setDisplayName] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
          auth.onAuthStateChanged((user) => {
            if (user) {
              let userobj = user;
              // console.log("LOGIN: User is signed in");
              // console.log("LOGIN USER: " + [userobj]);
              // console.log("LOGIN USERID: " + userobj["uid"]);
              // console.log("LOGIN USEROBJ: " + userobj["displayName"] + " - " + userobj["email"]);
              setIsLoggedIn(true);
              setDisplayName(userobj["displayName"]);
              // ...
            } else {
              // User is signed out
              // ...
              console.log("LOGIN: User is signed out");
            }
          });
    });

  return (
    <div>
    {isLoggedIn === false ?
      <div className="mt-8">
        <h1 className="text-3xl mb-2 text-center font-bold">Sign In</h1>
        <div className="border border-blue-400 mx-auto w-11/12 md:w-2/4 rounded py-8 px-4 md:px-8">
          {error !== null && <div className = "py-4 bg-red-600 w-full text-white text-center mb-3">{error}</div>}
          <p className="text-center my-3">or</p>
          <button
            className="bg-red-500 hover:bg-red-600 w-full py-2 text-white"
            onClick={() => {
              signInWithGoogle();
            }}
          >
            Sign in with Google
          </button>
        </div>
      </div>
      :
      <Dashboard />
      }
    </div>
  );
};

export default SignIn;