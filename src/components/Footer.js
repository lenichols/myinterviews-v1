import React from 'react'
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer align-center">
            <p >
               &copy; 2021-2022 My Interview Diary | All Rights Reversed. <Link to="/privacy">Privacy Statement</Link>
           </p>
        </div>
    )
}

export default Footer
