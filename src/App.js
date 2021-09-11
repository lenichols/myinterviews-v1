import React, {useState, useEffect, useContext} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUp from './components/SignUp';
import Login from './components/Login';
import PrivacyPolicy from './components/PrivacyPolicy';
import Dashboard from './components/Dashboard';
import { LoginProvider } from "./components/LoginContext";
import AddInterview from "./components/AddInterview";
import 'bootstrap/dist/css/bootstrap.css';

export const LoginUserContext = React.createContext();

function App() {
  return (
    <Router>  
      <LoginProvider>
        <Switch> 
          <Route path="/" component={Login} />
          <SignUp path="/signup"/>
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={Dashboard}/>
          <Route path="/AddInterview" component={AddInterview}/>
          <PrivacyPolicy path="/privacy"/>
        </Switch>
      </LoginProvider>
    </Router>
  );
}
export default App;