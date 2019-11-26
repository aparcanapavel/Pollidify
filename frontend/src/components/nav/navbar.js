import React from 'react';
import { Link } from 'react-router-dom'
// import './navbar.css'

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
        // if logged in render links
        //
        // return (
        //     <div>
        //         <Link to={'/tweets'}>All Tweets</Link>
        //         <Link to={'/profile'}>Profile</Link>
        //         <Link to={'/new_tweet'}>Write a Tweet</Link>
        //         <button onClick={this.logoutUser}>Logout</button>
        //     </div>
        // );

        // testing for logging in
        return (
          <div>
            <h1>Log In SUCCESSFUL</h1>
          </div>
        )
      } else {
        return (
            <div>
                <Link to={'/signup'}>Signup</Link>
                <Link to={'/login'}>Login</Link>
            </div>
        );
      }
  }

  render() {
      return (
        <div>
            <h1>Pollidify</h1>
            { this.getLinks() }
        </div>
      );
  }
}

export default NavBar;