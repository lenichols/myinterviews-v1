import React from 'react'
import Button from './Button'
import { Link, useHistory } from 'react-router-dom';
import Dashboard from './Dashboard';
import Footer from './Footer';
import './Login.css';

const Login = () => {
    const history = useHistory();
    const handleDashboardClick = () => history.push('/dashboard');
    const handleSignUpClick = () => history.push('/signup');

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

export default Login
