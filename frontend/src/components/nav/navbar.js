import React from 'react';
import { Link } from 'react-router-dom'
import './navbar.css'
import { AuthRoute } from '../../util/route_util';
import SignupFormContainer from '../session/signup_form_container';
import LoginFormContainer from '../session/login_form_container';
import LandingPage from '../landing_page';


class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
      e.preventDefault();
      this.props.logout();
  }

  getLinks() {
      if (this.props.loggedIn) {
        return (
            <div className="nav-bar-logged-in" >
                <button className="logout-button" onClick={this.logoutUser}>Logout</button>
            </div>
        );
      } else {
        return (  
            <div className="nav-bar-logged-out">
              <div className="signup-link" onClick={this.props.showSignup}>Signup</div>
              <div className="login-link" onClick={this.props.showLogin}>Login</div>           
            </div>
        );
      }
  }

  render() {
      return (
        <div className="nav-bar-main">
          <div className="nav-left">
            <h1 className="nav-logo">Pollidify</h1>
          </div>
          <div className="nav-mid"></div>
          <div className="nav-right">{this.getLinks()} </div> 
        </div>
      );
  }
}

export default NavBar;