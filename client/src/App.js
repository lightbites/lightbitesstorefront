import React, { Component } from "react";
import Header from "../src/components/Header-Welcome";
import StickyFooter from "../src/components/Footer";
import Welcome from "./pages/Welcome";
import { Security, ImplicitCallback } from "@okta/okta-react";
import Home from "./Home";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import SignInSide from "./pages/Sign-In";
import SignUp from "./pages/Sign-Up";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";
import Meals from "./pages/Meals";



const config = {
  issuer: "https://dev-675110.okta.com/oauth2/default",
  redirect_uri: window.location.origin + "/implicit/callback",
  client_id: "0oardocu5Ha2cFQ7V356"
};




class App extends Component {
  render() {
    return (
      <div>
        <Header />
        
        <Router>
          <Security issuer={config.issuer}
            client_id={config.client_id}
            redirect_uri={config.redirect_uri}
          >
            <Route path='/' exact={true} component={Home}/>
            <Route path='/implicit/callback' component={ImplicitCallback}/>
            <Route path="/welcome" component={Welcome} />
            <Route path="/signin" component={SignInSide} />
            <Route path="/signup" component={SignUp} />
            <Route path="/profile" component={Profile} />
            <Route path="/cart" component={Cart} />
            <Route path="/meals" component={Meals} />
              
            
          </Security>
        </Router>
        
        <Welcome />
      </div>
    );
  }
}

export default App;
