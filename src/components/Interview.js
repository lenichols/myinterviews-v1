import { red } from 'chalk'
import { FaTimes } from 'react-icons/fa'

const Interview = ({ interview, onDelete }) => {
    return (
        <div className="task">
            <h3>{interview.companyName}
             <FaTimes 
                style={{ color: 'red', cursor: 'pointer' }} 
                onClick={() => onDelete(interview.id)}
            />
            </h3>
            <p>{interview.note}</p>
            <p>{interview.day}</p>
        </div>
    )
}

export default Interview
