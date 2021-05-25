import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import HomeUser from "./components/user/home";
import adm from "./components/adm/adm";
import Insert from "./components/adm/insert";
import DeleteExercise from "./components/adm/deleteExe";
import DeleteUser from "./components/adm/deleteUser";
import signUpPatient from "./components/adm/signUpPatient";
import contador from "./components/user/contador";


function App() {  
  return (<Router>
    <div className="App">      

      <div className="auth-wrapper">
        <div >
          <Switch>
            <Route exact path='/' component={HomeUser} />            
            <Route exact path="/adm" component={adm} />
            <Route exact path="/adm/insert" component={Insert} />
            <Route exact path="/adm/delete" component={DeleteExercise} />
            <Route exact path="/adm/deleteUser" component={DeleteUser} />
            <Route exact path="/register-patient" component={signUpPatient} />
            <Route exact path="/practice" component={contador} />
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default App;