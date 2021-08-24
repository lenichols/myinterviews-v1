import React, { useState, useContext } from 'react'
import './AddInterview.css'
import { InterviewContext } from './Dashboard';


const AddInterview = ({ onAdd }) => {

    const { toggleState, setToggleState } = useContext(InterviewContext);

    const [values, setValues] = useState({
        date: '',
        company: '',
        category: '',
        experience: '',
        note: ''
    });

    const saveInterview = (e) => {
        e.preventDefault();
        if(!values.company) {
            alert('Please add a Company Name');
            return
        }

        if(!values.date) {
            alert('Please add a Date');
            return
        }

        if(!values.category) {
            alert('Please add a Category');
            return
        }

        if(!values.experience) {
            alert('Please add your Experience');
            return
        }

        if(!values.note) {
            alert('Please add a Note');
            return
        }
        onAdd(values);
        
    }

    const changeDate = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            date: event.target.value,
        }));
    };

    const changeCompany = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            company: event.target.value,
        }));
    };

    const changeCategory= (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            category: event.target.value,
        }));
    };

    const changeExperience= (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            experience: event.target.value,
        }));
    };

    const changeNotes = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            note: event.target.value,
        }));
    };

    return (
            <div className='row interview-well'>
                {/* <form onSubmit={saveInterview}> */}
                <div className="col-lg-12">
                    <div className="col-lg-3 details">
                        Enter The Details of your Interview
                    </div>
                </div>
                <br />
                <br />
                <br />
                
                <div className="col">
                    <label htmlFor="date">Date</label>
                    <input type="date" name="date" className="form-control" value={values.date} onChange={changeDate} />
                    <br />
                    <label htmlFor="company">Company</label>
                    <input type="text" name="company" className="form-control" value={values.company} onChange={changeCompany} />
                    <br />
                    <label htmlFor="category">Category</label>
                    <select name="category" id="category" className="form-control" value={values.category} onChange={changeCategory} >
                        <option value="Technology">Technology</option>
                        <option value="Design">Design</option>
                    </select>
                    < br/>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="experience" id="inlineRadio1" value="Positive" onChange={changeExperience} />
                        <label className="form-check-label" htmlFor="inlineRadio1">Positive</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="experience" id="inlineRadio2" value="Negative" onChange={changeExperience}  />
                        <label className="form-check-label" htmlFor="inlineRadio2">Negative</label>
                    </div>
                
                </div>
                <div className="col">
                    <label htmlFor="note">Note</label>
                    <textarea name="note" id="note" cols="30" rows="10" className="form-control" value={values.note} onChange={changeNotes} ></textarea>
                    <br />
                    <div className="form-group text-right">
                        <button id="addSaveButtn" type="button" onClick={(e) => saveInterview(e)} className="btn btn-lg btn-block btn-dark d-inline float-right">Add an interview</button>
                    </div>
                </div>
            </div>
    )
}

export default AddInterview
