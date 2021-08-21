import React, {useState, useEffect, useContext } from "react";
import Button from './Button'
import { Link, useHistory } from 'react-router-dom';
import Dashboard from './Dashboard';
import Footer from './Footer';
import './Login.css';
import { signInWithGoogle, auth } from "../firebase/firebase";
import { useHistory } from "react-router-dom";
// import { LoginContext } from "./LoginContext";
import { LoginUserContext } from "../App"
import { useLogin } from "./LoginContext";


const SignIn = () => {
    //const [displayName, setDisplayName] = useState();
    let [setIsLoggedIn] = useState();
    const [error, setError] = useState(null);
    let isLoggedIn  = useLogin();

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
              <button
            className="bg-red-500 hover:bg-red-600 w-full py-2 text-white" onClick={isLoggedIn}
          >
            Sign in with Google
          </button>
              <br/>
              Sign Up
              <Button color="blue" text="Go to Sign Up" onClick={handleSignUpClick} />
              <br/>
              <Footer />
          </div>
      </div>
      )
};

export default SignIn;