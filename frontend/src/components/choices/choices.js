import React from 'react';
import './choice.css';

class Choices extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      choiceId: null,
      votedPolls: []
    }
    this.timer = null; 
    this.castVote = this.castVote.bind(this);
    this.updateVote = this.updateVote.bind(this);
  }

  castVote(){
    this.props.createVote(this.state.choiceId).then(() => this.props.history.push('/polls')).then(() => this.setState({ choiceId: null, votedPolls: [] }));
    
  }

  updateVote(e, choiceId) {
    const choices = document.getElementsByClassName("choice-response");

    this.timer = setTimeout(() => {
      this.setState({ choiceId: choiceId });
    }, 300);

    for(let i = 0; i < choices.length; i++){
      let choice = choices[i];
      choice.classList.remove("selected");
    }
    e.target.classList.add("selected");
  }

  componentDidMount () {
    this.setState({ votedPolls: this.props.votedPollsIds });
  }

  componentWillUnmount(){
    clearTimeout(this.timer);
  }

 
  render () {
   
    if (!this.props.choices) {
      return <h1>loading</h1>
    }
    const pollChoices = this.props.choices.map(choice => {
      return <li
        key={choice._id} 
        className="choice-response"
        onClick={(e) => this.updateVote(e, choice._id)}>
          {choice.response}
      </li>
    });
    let exp_date = new Date(this.props.poll.expiration_date);
    let button = <button onClick={this.castVote} >Cast Vote</button>;
    if (exp_date < new Date()) {
      button = null;
    } else if (this.state.votedPolls.length > 0) {
      this.state.votedPolls.forEach(votedPollId => {
        if (votedPollId === this.props.pollId) {
          button = null;
        }
      })
    } 

    return (
      <div className="poll-choices">
        <ul className="choice-responses">
          {pollChoices}
        </ul>
        <div>{button}</div>
      </div>
    )
  }
}

export default Choices;