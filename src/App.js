import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/login.component";
import signUpDoctor from "./components/signUpDoctor.component";
import signUpPatient from "./components/signUpPatient.component";
import exercisePatient from "./components/patient/exercise.component";

export let username  
function App() {
  const login = 
  <nav className="navbar navbar-expand-lg navbar-light fixed-top">
    <div className="container">          
      <Link className="navbar-brand" to={"/sign-in"}>Speak</Link>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav ml-auto">          
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

  const logado = <nav className="navbar navbar-expand-lg navbar-light fixed-top">
  <div className="container">          
    <Link className="navbar-brand" to={"/patient"}>Speak</Link>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to={"/patient"}>{username}</Link>
        </li>        
      </ul>
    </div>
  </nav>

  let navbar = login
  
  if (username != null) {
    navbar = logado
  }

  return (<Router>
    <div className="App">
      {navbar}

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route exact path="/sign-in" component={Login} />
            <Route exact path="/register-doctor" component={signUpDoctor} />
            <Route exact path="/register-patient" component={signUpPatient} />
            <Route exact path="/patient" component={exercisePatient} />
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default App;