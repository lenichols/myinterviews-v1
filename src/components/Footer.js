import React from 'react'
import { Link, useHistory } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            this is thee footer. Go to 
            <Link to="/privacy">
                Privacy Policy
            </Link>
        </div>
    )
}

export default Footer
