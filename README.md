# Live Link:
[Live Link to Pollidify](https://warm-crag-62563.herokuapp.com)

# Pollidify
Pollidify is a global web application that allows users to create and respond to polls.

# Technologies & Technical Challenges
**MERN stack**
* MondoDB
* React/Redux
* Javascript
* Express 
* Node

**Technical Challenges:**
* Displaying statistical data in a graphical and intuitive way
* Ensuring all polls are anonymous and one-time answer only
* Calculating all votes for a specific poll
* Automatic deletion of expired polls

# Background and Overview
Ever wondered what everyone's stance is on a specific issue? Well now you can. With Pollidify you can create polls that everyone 
around the world can participate. You can visualize your statistics on each poll you create, with in-depth analysis.

Pollidify is a minimal application created in one week. 

# Features
* user authentication
* creating Polls
* participating in polls
* as the owner of the poll, owners can view statistical analysis
* automated deletion of polls past capacity
* automated closure of polls past expiration date

**Bonus features**
* notifications
* private poll vs. public poll results
* categories/tags
* demographics
* subscriptions via notifications

# Wireframes
![splash](https://github.com/aparcanapavel/Pollidify/blob/master/readmeImgs/pollidify.png?raw=true)
- Upon visiting the page, users are greeted with a spash page having more information about the app and its contributors.
- Users can Sign Up or login
- Based off my experience with Angular, I knew getting different components to render with animation was possible, and I wanted our app to have it. I was able to achieve this by using React's references between parent and children components. Further I also had to use asynchronous functions to achieve the smooth transitions. 
```js
// #frontend/src/components/app.js
class App extends React.Component {

  //...

  removeForm() {
    this.setState({ form: "" });
  }

  showSignup() {
    setTimeout(() => {
      this.setState({ ...this.state, form: "signup" }, this.toggleSlide);
    }, 100);
    this.removeSlide();
  }

  showLogin() {
    setTimeout(() => {
      this.setState({ ...this.state, form: "login" }, this.toggleSlide);
    }, 100);
    this.removeSlide();
  }

  //...
  Render(){
    //...
    return(
      //...
      <AuthRoute
        path="/"
        component={() => <LandingPage removeSlide={this.removeSlide} formType={this.state.form} removeForm={this.removeForm} />}
      />
      //...
      <NavBarContainer
            showSignup={this.showSignup}
            showLogin={this.showLogin}
      />
      //..
    );
  }
}
```
- The nav bar is what triggers the swap between components
```js
// #frontend/src/comoinents/landing_page.js

class LandingPage extends React.Component {
  // ...

  render() {
    if(formType === "signup"){
      form = <AuthRoute 
        path="/" 
        component={() => <SignupFormContainer removeForm={this.props.removeForm} />}
      />;
    } else if (formType === "login"){
      form = <AuthRoute 
        path="/" 
        component={() => <LoginFormContainer removeForm={this.props.removeForm} />} 
      />;
    }

    // ...
  }
}
```

- The landing page is what had the conditional as to which component to render based on the trigger event.

