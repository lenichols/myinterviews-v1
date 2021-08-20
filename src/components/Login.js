import React from 'react'
import Button from './Button'
import { Link, useHistory } from 'react-router-dom';
import Dashboard from './Dashboard';
import Footer from './Footer';

const Login = () => {
    const history = useHistory();
    const handleDashboardClick = () => history.push('/dashboard');
    const handleSignUpClick = () => history.push('/signup');

    return (
        <div>
            <br/>
            This is Log In
            <Button color="purple" text="Go to Dashboard" onClick={handleDashboardClick} />
            <br/>
            Sign Up
            <Button color="blue" text="Go to Sign Up" onClick={handleSignUpClick} />
            <br/>
            <Footer />
        </div>
    )
}

export default Login
