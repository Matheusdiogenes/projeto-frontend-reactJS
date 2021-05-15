import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/login.component";
import signUpDoctor from "./components/signUpDoctor.component";
import signUpPatient from "./components/signUpPatient.component";
import exercisePatient from "./components/patient/exercise.component";

function App() {
  return (<Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">          
          <Link className="navbar-brand" to={"/sign-in"}>Speak</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/register-doctor"}>Register Doctor</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/register-patient"}>Register Patient</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/register-doctor" component={signUpDoctor} />
            <Route path="/register-patient" component={signUpPatient} />
            <Route path="/patient" component={exercisePatient} />
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default App;