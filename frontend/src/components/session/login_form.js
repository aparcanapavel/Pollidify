import React from 'react';
import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.currentUser === true) {
  //     this.props.history.push('/');
  //   }

  //   this.setState({ errors: nextProps.errors })
  // }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    let user = {
      username: this.state.username,
      password: this.state.password
    };

    this.props.login(user);
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

  render() {
    return (
      <section className="session-form-container">
        <form onSubmit={this.handleSubmit} className="session-form">
          <h3 className="session-title">Log in</h3>
          <br/>
          <input
            className="login-username-input"
            type="text"
            value={this.state.username}
            onChange={this.update("username")}
            placeholder="Username"
          />

          <br />
          <input
            className="login-password-input"
            type="password"
            value={this.state.password}
            onChange={this.update("password")}
            placeholder="Password"
          />

          <br />

          <input className="login-form-submit" type="submit" value="Log in" />
          {this.renderErrors()}
        </form>
      </section>
    );
  }
}

export default withRouter(LoginForm);