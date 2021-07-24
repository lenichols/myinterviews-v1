import { useState } from 'react'


const AddInterview = ({ onAdd }) => {
    const [companyName, setCompanyName] = useState('')
    const [note, setNote] = useState('')
    const [day, setDay] = useState('')

    const saveInterview = (e) => {
        e.preventDefault();
        if(!companyName) {
            alert('Please add Company Name');
            return
        }

        if(!note) {
            alert('Please add Company Name');
            return
        }

        onAdd({ companyName, note, day })

        setCompanyName('');
        setNote('');
        setDay('');
    }
    return (
        <form className="add-form" onSubmit={saveInterview}>
            <div className="form-control">
                <label>Company Name</label>
                <input type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
            </div>
            <div className="form-control">
                <label>Notes</label>
                <textarea rows="5" type="text" placeholder="Add some notes..." value={note} onChange={(e) => setNote(e.target.value)}>
                </textarea>
            </div>
            <div className="form-control">
                <label>Day & Time</label>
                <input type="text" value={day} onChange={(e) => setDay(e.target.value)} />
            </div>
            <input type="submit" className="btn btn-block" value="save" />
        </form>
    )
}

export default AddInterview
