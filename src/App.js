import React from 'react';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/login.component";
import SignUp from "./components/signup.component";

function App() {
  return (<Router>
    <div className="App">
      <nav >
        <div >
          <Link to={"/sign-in"}>positronX.io</Link>
          <div >
            <ul >
              <li >
                <Link to={"/sign-in"}>Login</Link>
              </li>
              <li >
                <Link to={"/sign-up"}>Sign up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div>
        <div>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default App;

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <h3>Build Sign Up & Login UI Template in React</h3>
//     </div>
//   );
// }

// export default App;
