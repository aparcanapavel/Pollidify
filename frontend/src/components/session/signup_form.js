import React from "react";
import { withRouter } from "react-router-dom";
import './session.css';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      password2: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
    this.demoUser = this.demoUser.bind(this);
  }

  componentDidMount () {
    this.props.clearErrors();
  }


  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      username: this.state.username,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.signup(user, this.props.history).then((res) => {
      if (!this.isEmpty(res.currentUser)){
        this.props.removeForm();
      }
    });
  }

  renderErrors() {
    return (
      <ul className="session-errors-cont">
        {(this.props.errors).map((error, i) => (
          <li key={i} className="session-errors">{ error }</li>
        ))}
      </ul>
    )
  }

  isEmpty(obj) {
    if (obj == null) return true;
    if (obj.length > 0) return false;
    if (obj.length === 0) return true;

    if (typeof obj !== "object") return true;
    for (var key in obj) {
      if (hasOwnProperty.call(obj, key)) return false;
    }

    return true;
  }

  demoUser(e) {
    e.preventDefault();

    let user = {
      username: "demoUser",
      password: "password"
    };

    this.props.login(user)
      this.props.removeForm();
  }

  render() {
    return (
      <section className="session-form-container" id="signup-form">
        <form onSubmit={this.handleSubmit} className="session-form">
          <h3 className="session-title">Sign up</h3>
            <br />
            <input
              type="text"
              value={this.state.username}
              onChange={this.update("username")}
              placeholder="Username"
            />
            <br />
            <input
              type="password"
              value={this.state.password}
              onChange={this.update("password")}
              placeholder="Password"
            />
            <br />
            <input
              type="password"
              value={this.state.password2}
              onChange={this.update("password2")}
              placeholder="Confirm Password"
            />
            <br />
            <input type="submit" value="Sign up" />
            <p>or</p>
            <p onClick={this.demoUser} className="demo-user">Login as Demo User</p>
            {this.renderErrors()}
        </form>
      </section>
    );
  }
}

export default withRouter(SignupForm);
