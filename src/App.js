import React, {useState, useEffect, useContext} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUp from './components/SignUp';
import Login from './components/Login';
import PrivacyPolicy from './components/PrivacyPolicy';
import Dashboard from './components/Dashboard';
import { LoginProvider } from "./components/LoginContext";

export const LoginUserContext = React.createContext();

function App() {
  return (
    <Router>
      <LoginProvider>
        <Switch> 
          <SignUp path="/signup"/>
          <Route path="/login" component={Login}/>
          <Route path="/dashboard" component={Dashboard}/>
          <PrivacyPolicy path="/privacy"/>
        </Switch> 
     </LoginProvider>
  </Router>
  );
}
export default App;