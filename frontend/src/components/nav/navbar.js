import React from 'react';
import './navbar.css'
import { withRouter, Link } from "react-router-dom";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
    this.toHome = this.toHome.bind(this);
  }

  logoutUser(e) {
      e.preventDefault();
      this.props.logout();
  }

  toHome(){
    this.props.history.push("/polls");
  }

  getLinks() {
      if (this.props.loggedIn) {
        return (
          <div className="nav-bar-logged-in">
            <ul className="nav-right-options">
              <li>
                <Link to="/polls/new">Create Poll</Link>
              </li>
              <li>
                <Link to="/polls">All Polls</Link>
              </li>
              {/* <li>
                <Link to={`/polls/voted/${this.props.currentUser.id}`}>
                  Voted Polls
                </Link>
              </li>
              <li>
                <Link to={`/polls/user/${this.props.currentUser.id}`}>
                  My Polls
                </Link>
              </li> */}
              <li className="logout-button" onClick={this.logoutUser}>
                Logout
              </li>
            </ul>
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
    const pollidify = this.props.loggedIn ? <h1 className="nav-logo" onClick={this.toHome}>Pollidify</h1> : null;
      return (
        <div className="nav-bar-main">
          <div className="nav-left">
            {pollidify}
          </div>
          <div className="nav-mid"></div>
          <div className="nav-right">{this.getLinks()} </div> 
        </div>
      );
  }
}

export default withRouter(NavBar);