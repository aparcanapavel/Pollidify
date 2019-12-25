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

    this.props.signup(user, this.props.history).then(() => {
      this.props.removeForm();
    });
  }

  renderErrors() {
    return (
      <ul>
        {(this.props.errors).map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  demoUser(e) {
    let user = {
      username: "demoUser",
      password: "password"
    };

    this.props.login(user).then(() => {
      this.props.removeForm();
    });
  }

  render() {
    return (
      <section className="session-form-container">
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
            <p onClick={this.demoUser}>Login as Demo User</p>
            {this.renderErrors()}
        </form>
      </section>
    );
  }
}

export default withRouter(SignupForm);
