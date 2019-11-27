import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import MainPage from './main/main_page';
import LandingPage from './landing_page';
import './app.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: ""
    };
    this.showLogin = this.showLogin.bind(this);
    this.showSignup = this.showSignup.bind(this);
    this.toggleSlide = this.toggleSlide.bind(this);
    this.toggleTimer = null;
  }

  toggleSlide() {
    const right = document.getElementById("landing-form");
    const left = document.getElementById("landing-main-div");

    this.toggleTimer = setTimeout(() => {
      left.classList.add("show-form");
    }, 100);

    this.toggleTimer = setTimeout(() => {
      right.classList.add("show-form");
    }, 500);
  }

  removeSlide() {
    const right = document.getElementById("landing-form");
    const left = document.getElementById("landing-main-div");

    this.toggleTimer = setTimeout(() => {
      left.classList.remove("show-form");
    }, 0);

    this.toggleTimer = setTimeout(() => {
      right.classList.remove("show-form");
    }, 0);
  }

  componentWillUnmount() {
    clearTimeout(this.toggleTimer);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if(nextState.form === this.state.form){
      // debugger
      return false;
    }
    this.removeSlide();
    return true;
  }

  showSignup() {
    // this.setState({ ...this.state, form: "signup" }, this.toggleSlide);

    setTimeout(() => {
      this.setState({ ...this.state, form: "signup" }, this.toggleSlide);
    }, 100);
    this.removeSlide();
    console.log("signup clicked");
  }

  showLogin() {
    // this.setState({ ...this.state, form: "login" }, this.toggleSlide);
    setTimeout(() => {
      this.setState({ ...this.state, form: "login" }, this.toggleSlide);
    }, 100);
    this.removeSlide();
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