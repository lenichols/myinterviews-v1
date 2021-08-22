import React, { useState } from 'react'
import './AddInterview.css'


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
        <div className="" id="AddInterview">
             <form action="" className="form-control">
                 <div className='row interview-well'>
                <div className="details col-lg-6">
                    <label htmlFor="date">Date</label>
                    <input type="date" name="date" id="date" className="form-control" />

                    <label htmlFor="company">Company</label>
                    <input type="text" className="form-control"/>

                    <label htmlFor="category">Category</label>
                    <select name="category" id="category" className="form-control">
                        <option value="Technology" selected>Technology</option>
                        <option value="Design">Design</option>
                    </select>

                    <fieldset>
                        <legend>Experience</legend>
                        <input type="radio" id="positive" name="experience" className="form-control"/>
                        <label htmlFor="positive">Positive</label>
                        <input type="radio" id="negative" name="experience" className="form-control" />
                        <label htmlFor="negative">Negative</label>
                    </fieldset>
                </div>
                <div className="note col-lg-6">
                    <label htmlFor="note">Note</label>
                    <textarea name="note" id="note" cols="30" rows="50" className="form-control"></textarea>
                    <button className="btn btn-lg btn-block btn-dark">Add an interview</button>
                </div>
                </div>
            </form>
        {/* <form className="add-form" onSubmit={saveInterview}>
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
        </form> */}
        </div>
    )
}

export default AddInterview
