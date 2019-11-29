import React from 'react';
import './poll_form.css';

class PollForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      question: "",
      expiration_date: null,
      choice1: "",
      choice2: "",
      choice3: "",
      choice4: "",
      choice5: "",
      choice6: "",
      choice7: "",
      choice8: "",
      choice9: "",
      choice10: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let days;
    if (this.state.expiration_date) {
      days = Date.now();
      days += 1000 * 60 * 60 * 24 * this.state.expiration_date;
      days = new Date(days);
    } 

    let state = {
      question: this.state.question, 
      expiration_date: days,
      choices: {
        choice1: this.state.choice1,
        choice2: this.state.choice2,
        choice3: this.state.choice3,
        choice4: this.state.choice4,
        choice5: this.state.choice5,
        choice6: this.state.choice6,
        choice7: this.state.choice7,
        choice8: this.state.choice8,
        choice9: this.state.choice9,
        choice10: this.state.choice10
      }
    }

    state.choices = Object.values(state.choices).filter(Boolean);
    console.log(state);

    this.props.createPoll(state); 
    this.setState({
      question: "",
      expiration_date: null,
      choice1: "",
      choice2: "",
      choice3: "",
      choice4: "",
      choice5: "",
      choice6: "",
      choice7: "",
      choice8: "",
      choice9: "",
      choice10: ""
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
                  placeholder="Choice 1"
                />
                <br/>
                <input
                  type="text"
                  value={this.state.choice2}
                  onChange={this.update("choice2")}
                  placeholder="Choice 2"
                />
                <br/>
                <input
                  type="text"
                  value={this.state.choice3}
                  onChange={this.update("choice3")}
                  placeholder="Choice 3"
                />
                <br/>
                <input
                  type="text"
                  value={this.state.choice4}
                  onChange={this.update("choice4")}
                  placeholder="Choice 4"
                />
                <br/>
                <input
                  type="text"
                  value={this.state.choice5}
                  onChange={this.update("choice5")}
                  placeholder="Choice 5"
                />
                <br/>
                <input
                  type="text"
                  value={this.state.choice6}
                  onChange={this.update("choice6")}
                  placeholder="Choice 6"
                />
                <br/>
                <input
                  type="text"
                  value={this.state.choice7}
                  onChange={this.update("choice7")}
                  placeholder="Choice 7"
                />
                <br/>
                <input
                  type="text"
                  value={this.state.choice8}
                  onChange={this.update("choice8")}
                  placeholder="Choice 8"
                />
                <br/>
                <input
                  type="text"
                  value={this.state.choice9}
                  onChange={this.update("choice9")}
                  placeholder="Choice 9"
                />
                <br/>
                <input
                  type="text"
                  value={this.state.choice10}
                  onChange={this.update("choice10")}
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

export default PollForm;