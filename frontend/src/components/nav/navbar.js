import React from 'react';
import { Link } from 'react-router-dom'
import './navbar.css'

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
              <div className="signup-link"> <Link to={'/signup'}>Signup</Link></div>
              <div className="login-link"><Link to={'/login'}>Login</Link></div>
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