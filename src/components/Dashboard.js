import React, { useState, useEffect, useContext } from 'react'
import Header from './Header';
import Interviews from './Interviews';
import AddInterview from './AddInterview';
import Footer from './Footer';
import { useHistory } from "react-router-dom";
import { auth } from "../firebase/firebase";
// import { LoginContext } from "./LoginContext";
import { LoginUserContext } from "../App"
import { useLogin, useLoginUpdate } from "./LoginContext";



const Dashboard = () => {

    // const [displayName, setDisplayName] = useState('');
    //let [setIsLoggedIn] = useState();
    // const [error, setError] = useState(null);
    // let history = useHistory();

    // let isLoggedIn  = useContext(LoginUserContext);

    //let { isLoggedIn, setIsLoggedIn } = useContext(LoginContext);
    //let { displayName, setDisplayName } = useContext(LoginContext);

    const [showAddInterview, setShowAddInterview] = useState(false)

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

    //useLogin();


    // useEffect(() => {
    //   auth.onAuthStateChanged((user) => {
    //     if (user) {
    //       let userobj = user;
    //       setIsLoggedIn = true;
    //       //setDisplayName = userobj["displayName"];
    //       history.push("/dashboard");

    //     } else {
    //       console.log("LOGIN: User is signed out");
    //       setIsLoggedIn = false;
    //       history.push("/login");
    //     }
    //   });
    // }, []);

    // const onLogOutNow = (() => {
    //   auth.signOut().then(() => {
    //       console.log("logged out");
    //       isLoggedIn(false);
    //       history.push("/login");
    //   }).catch((error) => {
    //       console.log("logged out error: ", error);
    //   })
    // })

  
    const addInterview = (interview => {
      console.log("add", interview);
      const id = Math.floor(Math.random() * 10000) + 1;
      const newInterviewEntry = { id, ...interview }
      setInterviews([...interviews, newInterviewEntry]);
    })
  
    const deleteInterview = (id => {
      console.log('delete', id);
      setInterviews(interviews.filter((interview) => interview.id !== id))
    })



    return (
        <div className="">
        <Header onAdd={() => setShowAddInterview(!showAddInterview)} showAdd={showAddInterview} />
        {/* { isLoggedIn = false ? <div> YES I AM</div> : <div>NO IM NOT</div>} */}
       

      {showAddInterview && <AddInterview onAdd={addInterview} />}
      {interviews.length > 0 ? (<Interviews 
        interviews={interviews} 
        onDelete={deleteInterview}
      />) : ( 'No Tasks to Show!') } 
      <Footer />
      </div>
    )
}

export default Dashboard