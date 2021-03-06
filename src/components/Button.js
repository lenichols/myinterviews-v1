import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ text, onClick, buttonstyle, buttonwidth}) => {
    return (
        <button 
            className={buttonstyle }
            style={{ width: buttonwidth }}
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
    onClick: PropTypes.func
}

export default Button
