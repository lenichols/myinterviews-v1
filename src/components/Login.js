import React, {useState, useEffect, useContext } from "react";
import { signInWithGoogle, auth } from "../firebase/firebase";
import Dashboard from "./Dashboard";
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

export default SignIn;