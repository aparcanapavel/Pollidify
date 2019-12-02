import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import PollIndex from './polls/poll_index_container';
import LandingPage from './landing_page';
import './app.css';
import PollShowContainer from './polls/poll_show_container';
import UserPollsContainer from './polls/user_polls_container';
import CreatePollContainer from './polls/poll_form_container';
import VotedPollsContainer from './polls/voted_polls_container';

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

  // shouldComponentUpdate(nextProps, nextState) {
  //   if(nextState.form === this.state.form){
  //     return false;
  //   }
  //   this.removeSlide();
  //   return true;
  // }

  showSignup() {
    setTimeout(() => {
      this.setState({ ...this.state, form: "signup" }, this.toggleSlide);
    }, 100);
    this.removeSlide();
    console.log("signup clicked");
  }

  showLogin() {
    setTimeout(() => {
      this.setState({ ...this.state, form: "login" }, this.toggleSlide);
    }, 100);
    this.removeSlide();
    console.log("login clicked");
  }


  render() {
    return (
      <div className="app-div">
        <NavBarContainer
          showSignup={this.showSignup}
          showLogin={this.showLogin}
        />
        <Switch>
          <ProtectedRoute
            exact
            path="/polls/user/:id"
            component={UserPollsContainer}
          />

          <ProtectedRoute 
            exact
            path="/polls/voted/:id"
            component={VotedPollsContainer}
          />

          <ProtectedRoute
            exact
            path="/polls/new"
            component={CreatePollContainer}
          />

          <ProtectedRoute
            exact
            path="/polls/:id"
            component={PollShowContainer}
          />
          <ProtectedRoute exact path="/polls" component={PollIndex} />
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