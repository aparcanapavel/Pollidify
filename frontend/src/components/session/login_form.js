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
    this.demoUser = this.demoUser.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
  }


  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
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

  handleSubmit(e) {
    e.preventDefault();

    let user = {
      username: this.state.username,
      password: this.state.password
    };

    this.props.login(user).then(res => {
      try{
        if(!this.isEmpty(res.currentUser)){
          this.props.removeForm();
        }
      }
      catch(err){
        this.props.errors.push(err);
      }
    })
  }

  demoUser(e){
    e.preventDefault();
    let user = {
      username: "demoUser",
      password: "password"
    };

    this.props.login(user).then(() => {
      if (!this.isEmpty(user)) {
        this.props.removeForm();
      }
    });
  }

  renderErrors() {
    return (
      <ul className="session-errors-cont">
        {(this.props.errors).map((error, i) => (
          <li key={`error-${i}`} className="session-errors">{error}</li>
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
          <p>or</p>
          <p onClick={this.demoUser} className="demo-user">Login as Demo User</p>
          {this.renderErrors()}
        </form>
      </section>
    );
  }
}

export default withRouter(LoginForm);