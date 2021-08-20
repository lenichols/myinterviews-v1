import Interview from './Interview'
import './Interviews.css';


const Interviews = ({ interviews, onDelete }) => {
    return (
        <>
          {interviews.map((interview)=> (
            <Interview key={interview.id} interview={interview} onDelete={onDelete} />
          ))}
        </>
    )
}

export default Interviews
