import React from 'react';
import './landing_page.css';
import { AuthRoute } from "../util/route_util";
import SignupFormContainer from "./session/signup_form_container";
import LoginFormContainer from "./session/login_form_container";

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.toggleTimer = null;
  }
  
  render() {
    const { formType } = this.props;
    
    let form;

    if(formType === "signup"){
      form = <AuthRoute path="/" component={SignupFormContainer} />;
    } else if (formType === "login"){
      form = <AuthRoute path="/" component={LoginFormContainer} />;
    }
    const date = new Date();
    const year = date.getFullYear();
    
    return (
      <div className="landing-page" id="landing-page">
        <main id="landing-main">
          <div className="landing-main-title" id="landing-main-div">
            <h1>Pollidify</h1>
            <p>Worldwide Polling</p>
          </div>
          <div id="landing-form">
            <a
              className="fas fa-angle-right"
              id="removeForm"
              onClick={this.props.removeSlide}
            ></a>
            {form}
          </div>
        </main>

        <section className="project-details-container">
          <nav className="sub-nav">
            <ul>
              <li>
                <a href="#about-pollidify" onClick={this.props.removeSlide}>
                  Pollidify?
                </a>
              </li>
              <li>
                <a href="#developers-msg" onClick={this.props.removeSlide}>
                  From the Developers
                </a>
              </li>
              <li>
                <a href="#contact" onClick={this.props.removeSlide}>
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
          <article id="about-pollidify">
            <h3>What is Pollidify?</h3>
            <p>
              As developers, we wanted to continue making tools that would help
              connect people around the world, so we came up with{" "}
              <i>Pollidify.</i>As we worked on the application, we, as a group,
              made decisions as to how the application would look like, what
              features it should have,and how the application should behave.
              Today, Pollidify is an application that aims to poll participants
              at a world wide scale, and allow users to express their polls.
            </p>
          </article>

          <article id="developers-msg">
            <h3>Message from the developers</h3>
            <p>
              Thank you for visiting our project Pollidify. We hope that you
              find our application useful. If you wish to help us expand the
              project, please reach out to us through github or through Linked
              In!
            </p>
          </article>

          <article id="contact">
            <h3>Contact Us</h3>
            <div className="git-contact">
              <a
                target="_blank"
                href="https://github.com/asafmohammad5"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>Asaf Mohammad
              </a>
              <a
                target="_blank"
                href="https://github.com/MikaEleFant"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>Chang Ho Lee
              </a>
              <a
                target="_blank"
                href="https://github.com/aparcanapavel"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>Pavel Aparcana
              </a>
            </div>
          </article>
        </section>

        <div className="copyright">
          <i className="far fa-copyright"></i>Pollidify {year}
        </div>
      </div>
    );
  }
}

export default LandingPage;
