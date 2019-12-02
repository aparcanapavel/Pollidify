import React from 'react';
import './poll_form.css';
import { withRouter } from 'react-router-dom';

class PollForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      question: "",
      expiration_date: 1,
      choice1: "",
      choice2: "",
      choice3: "",
      choice4: "",
      choice5: "",
      choice6: "",
      choice7: "",
      choice8: "",
      choice9: "",
      choice10: "",
      canCreate: true,
      loading: true
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // this.props.fetchUserPolls(this.props.currentUser.id).then(userPolls => {
    //   let activePolls = Object.values(userPolls.polls.data);

    //   activePolls.map(poll => {
    //     let exp_date = new Date(poll.expiration_date);
    //     let today = new Date();
    //     if (exp_date >= today) {
    //       return poll;
    //     }
    //   })
    //   if (activePolls.length >= 2) { 
    //     this.setState({
    //       canCreate: false,
    //       loading: false
    //     })
    //   } else {
    //     this.setState({
    //       loading: false
    //     })
    //   }
    // });
    
  }

  titleCase(string){
    let str;
    str = string.toLowerCase().split(" ");
    str[0] = str[0].charAt(0).toUpperCase() + str[0].slice(1);
    return str.join(" ");
  }
  

  handleSubmit(e) {
    e.preventDefault();
    let days;
    days = Date.now();
    days += 1000 * 60 * 60 * 24 * this.state.expiration_date;
    days = new Date(days);

    const capQuestion = this.titleCase(this.state.question);

    let state = {
      question: this.titleCase(this.state.question),
      expiration_date: days,
      choices: {
        choice1: this.titleCase(this.state.choice1),
        choice2: this.titleCase(this.state.choice2),
        choice3: this.titleCase(this.state.choice3),
        choice4: this.titleCase(this.state.choice4),
        choice5: this.titleCase(this.state.choice5),
        choice6: this.titleCase(this.state.choice6),
        choice7: this.titleCase(this.state.choice7),
        choice8: this.titleCase(this.state.choice8),
        choice9: this.titleCase(this.state.choice9),
        choice10: this.titleCase(this.state.choice10)
      }
    };

    state.choices = Object.values(state.choices).filter(Boolean);

    this.props.createPoll(state).then(() => {
      this.props.history.push(`/polls/user/${this.props.currentUser.id}`);
    }); 
    
    this.setState({
      question: "",
      expiration_date: 1,
      choice1: "",
      choice2: "",
      choice3: "",
      choice4: "",
      choice5: "",
      choice6: "",
      choice7: "",
      choice8: "",
      choice9: "",
      choice10: "",
      canCreate: true,
      loading: true
    })
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }


  renderFormErrors() {
    return (
      <ul>
        {(this.props.formErrors).map((error, i) => (
          <li key={`error-f-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  renderChoiceErrors() {
    return (
      <ul>
        {(this.props.choiceErrors).map((error, i) => (
          <li key={`error-c-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  render() {
    if (this.state.loading) {
      return (
        <div className="create-poll-form-div">
          <h1>Loading...</h1>
        </div>
      )
    } else if (!this.state.canCreate) {
      return (
        <div className="create-poll-form-div">
          <h1>Sorry! You can't have more than two active polls at the same time!</h1>
        </div>
      )
    } else {
      return (
        <div className="create-poll-form-div">
          <h3>New Poll</h3>
          {this.renderFormErrors()}
          <form onSubmit={this.handleSubmit}>
            <div>
              <label>
                Question:
                <br />
                <input
                  type="text"
                  value={this.state.question}
                  onChange={this.update("question")}
                  maxLength="100"
                  placeholder="Your question here"
                />
              </label>

              <br />
              <br />

              <label>
                Duration (in days):
                <input
                  type="number"
                  min="1"
                  max="90"
                  value={this.state.expiration_date}
                  onChange={this.update("expiration_date")}
                />
              </label>
              <br />
              <br />
              <div className="choices-form-div">
                {this.renderChoiceErrors()}
                <label>
                  Choices:
                  <input
                    type="text"
                    value={this.state.choice1}
                    onChange={this.update("choice1")}
                    maxLength="60"
                    placeholder="Choice 1"
                  />
                  <br/>
                  <input
                    type="text"
                    value={this.state.choice2}
                    onChange={this.update("choice2")}
                    maxLength="60"
                    placeholder="Choice 2"
                  />
                  <br/>
                  <input
                    type="text"
                    value={this.state.choice3}
                    onChange={this.update("choice3")}
                    maxLength="60"
                    placeholder="Choice 3"
                  />
                  <br/>
                  <input
                    type="text"
                    value={this.state.choice4}
                    onChange={this.update("choice4")}
                    maxLength="60"
                    placeholder="Choice 4"
                  />
                  <br/>
                  <input
                    type="text"
                    value={this.state.choice5}
                    onChange={this.update("choice5")}
                    maxLength="60"
                    placeholder="Choice 5"
                  />
                  <br/>
                  <input
                    type="text"
                    value={this.state.choice6}
                    onChange={this.update("choice6")}
                    maxLength="60"
                    placeholder="Choice 6"
                  />
                  <br/>
                  <input
                    type="text"
                    value={this.state.choice7}
                    onChange={this.update("choice7")}
                    maxLength="60"
                    placeholder="Choice 7"
                  />
                  <br/>
                  <input
                    type="text"
                    value={this.state.choice8}
                    onChange={this.update("choice8")}
                    maxLength="60"
                    placeholder="Choice 8"
                  />
                  <br/>
                  <input
                    type="text"
                    value={this.state.choice9}
                    onChange={this.update("choice9")}
                    maxLength="60"
                    placeholder="Choice 9"
                  />
                  <br/>
                  <input
                    type="text"
                    value={this.state.choice10}
                    onChange={this.update("choice10")}
                    maxLength="60"
                    placeholder="Choice 10"
                  />
                </label>
              </div>

              <input type="submit" value="Submit" />
            </div>
          </form>
          <br />
        </div>
      );
    }
  }
}

export default withRouter(PollForm);