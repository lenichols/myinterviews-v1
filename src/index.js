import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route } from 'react-router-dom';


ReactDOM.render(
  <Router>
    <Route render={({}) => <App history={history} />} />
  </Router>,
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/* OAuth Localization */
firebase.auth().useDeviceLanguage();

/* Sign in with redirecting to signin page */
firebase.auth().signInWithRedirect(provider);

/* To sign out a user*/
firebase.auth().signOut().then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});

