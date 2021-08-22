<<<<<<< HEAD
import React from 'react'
import Button from './Button'
import { Link, useHistory } from 'react-router-dom';
import Dashboard from './Dashboard';
import Footer from './Footer';
import './Login.css';
=======
import React, {useState, useEffect, useContext } from "react";
import { signInWithGoogle, auth } from "../firebase/firebase";
import Dashboard from "./Dashboard";
import { useHistory } from "react-router-dom";
// import { LoginContext } from "./LoginContext";
import { LoginUserContext } from "../App"
import { useLogin } from "./LoginContext";
>>>>>>> master


<<<<<<< HEAD
    return (
    <div class="page" id="login">
        <div class="container">
            <header>
                <h2><span></span> My Interview <span></span></h2>
                <h1>Diary</h1>
                <h4>Document + Journal + Reflect</h4>
                <div class="google-auth">
                    <button><i class="fab fa-google"></i>Sign in with Google</button>
                    <p><a href="">Create an Account</a></p>
                </div>
            </header>
            <br/>
            Dashboard
            <Button color="purple" text="Go to Dashboard" onClick={handleDashboardClick} />
            <br/>
            Sign Up
            <Button color="blue" text="Go to Sign Up" onClick={handleSignUpClick} />
            <br/>
            <Footer />
        </div>
    </div>
    )
}
=======
const SignIn = () => {
    //const [displayName, setDisplayName] = useState();
    let [setIsLoggedIn] = useState();
    const [error, setError] = useState(null);
    let isLoggedIn  = useLogin();

  return (
    <div>

      <div className="mt-8">
        <h1 className="text-3xl mb-2 text-center font-bold">Sign In</h1>
        {/* { isLoggedIn = false ? <div> YES I AM</div> : <div>NO IM NOT</div>} */}

        <div className="border border-blue-400 mx-auto w-11/12 md:w-2/4 rounded py-8 px-4 md:px-8">
          {error !== null && <div className = "py-4 bg-red-600 w-full text-white text-center mb-3">{error}</div>}
          <p className="text-center my-3">or</p>
          <button
            className="bg-red-500 hover:bg-red-600 w-full py-2 text-white"
            onClick={isLoggedIn}
          >
            Sign in with Google
          </button>
        </div>
      </div>
     
    </div>
  );
};
>>>>>>> master

export default SignIn;