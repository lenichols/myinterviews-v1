import React from 'react'
import Button from './Button'
import { Link, useHistory } from 'react-router-dom';
import Dashboard from './Dashboard';
import Footer from './Footer';

const Login = () => {
    const history = useHistory();
    const handleDashboardClick = () => history.push('/dashboard');

    return (
        <div>
            thus sthis
            this is login
            <br/>
            <Button color="purple" text="Go to Dashboard" onClick={handleDashboardClick} />
            <Footer />
        </div>
    )
}

export default Login
