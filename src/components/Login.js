import React, {useState, useEffect, useContext } from "react";
import { Link, useHistory } from 'react-router-dom';
import Dashboard from './Dashboard';
import Footer from './Footer';
import './Login.css';
import { signInWithGoogle, auth } from "../firebase/firebase";
// import { LoginContext } from "./LoginContext";
import { useLogin } from "./LoginContext";
import reactDom from "react-dom";

const SignIn = () => {
    //const [displayName, setDisplayName] = useState();
    let [setIsLoggedIn] = useState();
    const [error, setError] = useState(null);
    let isLoggedIn  = useLogin();

    return (
    <div className="login">
      <div className="row">
           <div className="col-lg-5 col-sm-12">
             <div className="text-center">
                <h2><span>{'>'}</span> My Interview <span>{'<'}</span></h2>
                <h1>Diary</h1>
                <h4>Document + Journal + Reflect</h4>             
                {/* <div className="login google-auth"> */}
                  <button type="button" onClick={isLoggedIn} className="btn btn-danger btn-lg btn-block btn-black d-inline float-right google-button">
                  Sign in with Google
                </button>
                <p><a href="">Create an Account</a></p>
            </div>
         </div>
         
         </div>
         <Footer/>
       </div>
)
};
export default SignIn;