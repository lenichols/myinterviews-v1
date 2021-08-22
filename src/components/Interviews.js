import Interview from './Interview'
import './Interviews.css'

const Interviews = ({ interviews, onDelete }) => {
    return (
        <>
        <div class="page" id="login">
        <div class="container">
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
