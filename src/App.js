import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from "react";

import SignUp from './components/SignUp';
import Login from './components/Login';
import Header from './components/Header';
import Interviews from './components/Interviews';
import AddInterview from './components/AddInterview';
import './App.css';
import Dashboard from './components/Dashboard';
import PrivacyPolicy from './components/PrivacyPolicy';
import UserProvider from "./providers/UserProvider";


const App = () => {

  const [showAddInterview, setShowAddInterview] = useState(false);

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

  return (
    <Router>  
      <Switch> 
      <UserProvider>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/">
          <Dashboard />
        </Route>
        </UserProvider>
        <Route path="/privacy">
          <PrivacyPolicy />
      </Route>
      </Switch>
    </Router>
  );
}

export default App;
