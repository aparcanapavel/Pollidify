import React from 'react';
import './landing_page.css';
import { AuthRoute } from "../util/route_util";
import SignupFormContainer from "./session/signup_form_container";
import LoginFormContainer from "./session/login_form_container";
import FadeIn from "react-fade-in";
const fade = require("fade");

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    // this.toggleForms = this.toggleForms.bind(this);
  }

  // componentDidMount() {
  //   this.toggleForms();
  // }

  // toggleForms() {
  //   console.log("hello from the landing page");
  // }
  
  render() {
    const { formType } = this.props;
    
    let form;

    if(formType === "signup"){
      form = <AuthRoute path="/" component={SignupFormContainer} />;
    } else if (formType === "login"){
      form = <AuthRoute path="/" component={LoginFormContainer} />;
    }
    
    return (
      <div className="landing-page">
        <main className="landing-main" id="landing-main">
          <div className="landing-main-div">
            <h1>This is where we'd have our about page and stuff.</h1>
          </div>
        </main>

        <div id="landing-form">
          <FadeIn>{form}</FadeIn>
        </div>
      </div>
    );
  }
}

export default LandingPage;
