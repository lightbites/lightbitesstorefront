import React from "react";
import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import App from "./App";
import Welcome from "./pages/Welcome";
import SignInSide from "./pages/Sign-In";
import Notfound from "./notfound";

const routing = (
  
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/signin">Log In</Link>
        </li>
    
      </ul>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/welcome" component={Welcome} />
        <Route path="/signin" component={SignInSide} />
        <Route component={Notfound} />
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
