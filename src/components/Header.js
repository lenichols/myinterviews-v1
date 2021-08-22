import React, {useState, useEffect, useContext} from "react";
import PropTypes from 'prop-types';
import Button from './Button';
import { useLogout } from "./LoginContext";

const Header = ({ title, onAdd, showAdd }) => {
    let logoutUpdate  = useLogout();

<<<<<<< HEAD
    const onClick = (e) => {
        console.log("header button click");
    }

    
=======
>>>>>>> master
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button color={showAdd ? 'orange' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd} />
            <br/>
            {/* <Link to="login">Logout</Link> */}
            <button type="button" onClick={(e) => logoutUpdate(e)}>Logout</button>
        </header>
    )
}

Header.defaultProps = {
    title: "Interview Tracker"
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header
