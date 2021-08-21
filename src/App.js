import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUp from './components/SignUp';
import Login from './components/Login';
import PrivacyPolicy from './components/PrivacyPolicy';

function App() {
  return (
    <Router>
    <Switch> 
      <SignUp path="/signup"/>
      <Login path="/login"/>
      <PrivacyPolicy path="/privacy"/>
    </Switch> 
  </Router>
  );
}
export default App;