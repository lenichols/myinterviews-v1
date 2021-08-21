import Interview from './Interview'
import './Interviews.css'

const Interviews = ({ interviews, onDelete }) => {
    return (
        <>
        <div className="page" id="login">
        <div className="">
          <header>
           {interviews.map((interview)=> (
            <Interview key={interview.id} interview={interview} onDelete={onDelete} />
              ))}
          </header>
           </div>
          </div>
        </>
    )
}

export default Interviews
