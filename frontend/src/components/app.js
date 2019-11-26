import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import LandingPage from './landing_page';
import './app.css';
import { throws } from 'assert';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      form: ""
    }
    this.showLogin = this.showLogin.bind(this);
    this.showSignup = this.showSignup.bind(this);
    this.toggleSlide = this.toggleSlide.bind(this);
    this.toggleTimer = null;
  }

  toggleSlide() {
    const right = document.getElementById("landing-form");
    const left = document.getElementById("landing-main-div");
    // debugger
    
    this.toggleTimer = setTimeout(() => {
      left.classList.toggle("show-form");
    }, 100);

    this.toggleTimer = setTimeout(() => {
      right.classList.toggle("show-form");
    }, 1000);
  }

  componentWillUnmount() {
    clearTimeout(this.toggleTimer);
  }

  

  showSignup() {
    this.setState({ ...this.state, form: "signup" }, this.toggleSlide);
    console.log("signup clicked");
  }

  showLogin() {
    this.setState({ ...this.state, form: "login" }, this.toggleSlide);
    console.log("login clicked");
  }

  // hideforms(){
  //   this.setState({ form: "" });
  // }

  render() {
    return (
      <div className="app-div">
        <NavBarContainer
          showSignup={this.showSignup}
          showLogin={this.showLogin}
        />
        <Switch>
          <ProtectedRoute exact path="/polls" component={MainPage} />
          <AuthRoute
            path="/"
            component={() => <LandingPage formType={this.state.form} />}
          />
        </Switch>
      </div>
    );
  }

}

export default App;