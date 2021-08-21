import React, {useState, useEffect, useContext} from "react";
import PropTypes from 'prop-types';
import Button from './Button';
import { useLogout } from "./LoginContext";
import './Header.css';

const Header = ({ title, onAdd, showAdd }) => {
    let logoutUpdate  = useLogout();

    const onClick = (e) => {
        console.log("header button click");
    }

    
    return (
        <header className="intheader">
            <nav className="navbar navbar-light justify-content-between">
                <a className="navbar-brand"><h1>{title}</h1></a>
                <form className="form-inline">
                <Button buttonstyle="btn btn-lg btn-block btn-dark float-right" text={showAdd ? 'Close' : 'Add Interview'} onClick={onAdd} buttonwidth="350px"/>  <button type="button" className="btn float-right" onClick={(e) => logoutUpdate(e)}>Logout</button> 
                </form>
               
                </nav>
            <br/>
            {/* <Link to="login">Logout</Link> */}
            
        </header>
    )
}

Header.defaultProps = {
    title: "My Interview Diary"
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header
