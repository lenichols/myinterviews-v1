import React from "react";
import { red } from 'chalk'
import { FaTimes } from 'react-icons/fa'
import './Interviews.css'

const Interview = ({ interview, onDelete }) => {
    return (
        <div className="">
        <header>
            <div className="task">
                <h3>{interview.company}
                <FaTimes 
                    style={{ color: 'red', cursor: 'pointer' }} 
                    onClick={() => onDelete(interview.id)}
                />
                </h3>
                <p>{interview.note}</p>
                <p>{interview.day}</p>
                </div>
            </header>
        </div>
    )
}

export default Interview
