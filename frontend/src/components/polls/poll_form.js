import React from 'react';

class PollForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      poll: {
        question: "",
        expiration_date: Date.now
      },
      choices: {
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
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let days = Date.now + 1000*60*60*24*(this.state.expiration_date);
    this.setState({poll: {expiration_date: days}})

    let state = {
      poll: this.state.poll,
      choices: Object.values(this.state.choices).filter(Boolean)
    }

    this.props.createPoll(state); 
    this.setState({
      poll: {
        question: "",
        expiration_date: Date.now
      },
      choices: {
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
    })
  }

  update(field1, field2) {
    return e => this.setState({
      [field1]: {[field2]: e.currentTarget.value}
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>
              Question:
              <input type="text" value={this.state.poll.question} onChange={this.update("poll", "question")} placeholder="Your question here" />
            </label>

            <label>
              Duration (in days):
              <input type="number" min="1" max="90" value={this.state.poll.expiration_date} onChange={this.update("poll","expiration_date")} />
            </label>

            <div className="choices-form-div">
              <label>
                Choices:
                <input type="text" value={this.state.choices.choice1} onChange={this.update("choices","choice1")} placeholder="Choice 1" />
                <input type="text" value={this.state.choices.choice2} onChange={this.update("choices","choice2")} placeholder="Choice 2" />
                <input type="text" value={this.state.choices.choice3} onChange={this.update("choices","choice3")} placeholder="Choice 3" />
                <input type="text" value={this.state.choices.choice4} onChange={this.update("choices","choice4")} placeholder="Choice 4" />
                <input type="text" value={this.state.choices.choice5} onChange={this.update("choices","choice5")} placeholder="Choice 5" />
                <input type="text" value={this.state.choices.choice6} onChange={this.update("choices","choice6")} placeholder="Choice 6" />
                <input type="text" value={this.state.choices.choice7} onChange={this.update("choices","choice7")} placeholder="Choice 7" />
                <input type="text" value={this.state.choices.choice8} onChange={this.update("choices","choice8")} placeholder="Choice 8" />
                <input type="text" value={this.state.choices.choice9} onChange={this.update("choices","choice9")} placeholder="Choice 9" />
                <input type="text" value={this.state.choices.choice10} onChange={this.update("choices","choice10")} placeholder="Choice 10" />
              </label>
            </div>

            <input type="submit" value="Submit" />
          </div>
        </form>
        <br />
      </div>
    )
  }
}

export default PollForm;