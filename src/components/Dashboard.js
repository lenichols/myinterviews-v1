import React, { useState, createContext } from 'react'
import Header from './Header';
import Interviews from './Interviews';
import AddInterview from './AddInterview';
import Footer from './Footer';
import { useLoginState } from "./LoginContext";
import { auth, saveInterview } from '../firebase/firebase';
import './Dashboard.css'


export const InterviewContext = createContext();

const Dashboard = () => {

    const [toggleState, setToggleState] = useState("Close");
    // const [displayName] = useState();
    // const [displayName, setDisplayName] = useState('');

    const displayNameFound = useLoginState();


    const [interviews, setInterviews] = useState([
        {
            id: 1,
            companyName: "Phil",
            note: "This is what happened at Phil org during my interview",
            day: "Feb 8th at 3pm",
            reminder: true
        },
        {
            id: 2,
            companyName: "Microsoft",
            note: "Spent time on-site with microsoft and felt their culture was good, it just lacked a lot of organization.",
            day: "April 16th at 10am",
            reminder: true
        },
        {
            id: 3,
            companyName: "NVIDIA",
            note: "Interview 2 went well, just trying to figure out if there are any other women on staff.",
            day: "April 20nd at 1pm",
            reminder: true
        },
        {
            id: 4,
            companyName: "RE CO",
            note: "Scheduled 3 interviews in a row.",
            day: "July 5th at 1pm",
            reminder: false
        }
    ]);
  
    const addInterview = (interview => {
      console.log("add", interview);
      const id = Math.floor(Math.random() * 10000) + 1;
      const newInterviewEntry = { id, ...interview };
      saveInterview(newInterviewEntry);
      setInterviews([...interviews, newInterviewEntry]);
      let setTheContext = (toggleState === "Open" ? "Close" : "Open");
      setToggleState(setTheContext);
    })
  
    const deleteInterview = (id => {
      console.log('delete', id);
      setInterviews(interviews.filter((interview) => interview.id !== id))
    })

    return (
        <div>
          <InterviewContext.Provider value={{ toggleState, setToggleState }}>
            <Header />
            <div className="welcome">Welcome { displayNameFound }!</div>
              { toggleState === "Open" ? (<AddInterview onAdd={ addInterview }  />) : ''}
              { interviews.length > 0 ? (<Interviews interviews={ interviews } onDelete={ deleteInterview } />) : ( 'No Tasks to Show!') } 
              </InterviewContext.Provider>
            <Footer />
        </div>
    )
}

Dashboard.defaultProps = {
  addInterviewOnce: "Open"
}

export default Dashboard

