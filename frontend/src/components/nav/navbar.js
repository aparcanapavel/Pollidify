import React from 'react';
import './navbar.css'
import { withRouter } from "react-router-dom";


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
                <Link to="">Create Poll</Link>
              </li>
              <li>
                <Link to="/polls">All Polls</Link>
              </li>
              <li>
                <Link to="">Voted Polls</Link>
              </li>
              <li>
                <Link to={`/polls/user/${this.props.currentUser.id}`}>My Polls</Link>
              </li>
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
      return (
        <div className="nav-bar-main">
          <div className="nav-left">
            <h1 className="nav-logo" onClick={this.toHome}>Pollidify</h1>
          </div>
          <div className="nav-mid"></div>
          <div className="nav-right">{this.getLinks()} </div> 
        </div>
      );
  }
}

export default withRouter(NavBar);