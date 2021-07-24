import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ color, text, onClick}) => {

    const setAdd = (e) => {
        e.preventDefault();
        console.log("ADD:::::::");
        console.log("\n\n");
    }


    return (
        <button 
            className="btn"
            style={{ backgroundColor: color }}
            onClick={onClick}
        >
            {text}
        </button>
    )
}

Button.defaultProp = {
    color: "darkBlue"
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    onClick: PropTypes.func
}

export default Button
