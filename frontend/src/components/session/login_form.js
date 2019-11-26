import React from 'react';
import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      errors: {}
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
      <ul className="login-form-errors">
        {Object.keys(this.state.errors).map((error, i) => (
          <li className="login-errors" key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="login-form">
          
          <label className="login-form-username-label">
            <input 
              className="login-username-input"
              type="text"
              value={this.state.username}
              onChange={this.update('username')}
              placeholder="Username"
            />
          </label>

            <br />

          <label className="login-form-password-label">
            <input 
              className="login-password-input"
              type="password"
              value={this.state.password}
              onChange={this.update('password')}
              placeholder="Password"
            />
            </label>

            <br />

            <input className="login-form-submit" type="submit" value="Submit" />
            {this.renderErrors()}
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);