import React, {useState, useEffect, useContext, createContext, setContext} from "react";
import PropTypes from 'prop-types';
import Button from './Button';
import { useLogout } from "./LoginContext";
import './Header.css';
import { InterviewContext } from './Dashboard';

const Header = ({ title }) => {

    const { toggleState, setToggleState } = useContext(InterviewContext);
    let logoutUpdate  = useLogout();

    const goCreateInterview = (e) => {
        e.preventDefault();
        let setTheContext = (toggleState === "Open" ? "Close" : "Open");
        setToggleState(setTheContext);
    }
    
    return (
        <header className="intheader">
            <nav className="navbar navbar-light justify-content-between">
                <a className="navbar-brand"><h1 id="header-title">{title}</h1></a>
                <form className="form-inline">
                <Button buttonstyle="btn btn-lg btn-block btn-dark float-right" text={toggleState === "Open" ? 'Close' : 'Add Interview'} onClick={(e) => goCreateInterview(e)} buttonwidth="350px"/>  
                <button type="button" className="btn float-right" onClick={(e) => logoutUpdate(e)}>Logout</button> 
                </form>
            </nav>
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
