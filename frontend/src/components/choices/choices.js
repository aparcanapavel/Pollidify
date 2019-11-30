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
    this.props.createVote(this.state.choiceId).then(() => this.props.history.push('/polls'));
    
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
    this.props.fetchChoices(this.props.pollId).then(() => {
      this.props.fetchVotedPolls(this.props.currentUserId).then(votedPolls => {
        this.setState({votedPolls: votedPolls.votedPolls.data});
      })
    });
  }

  componentWillUnmount(){
    clearTimeout(this.timer);
  }

 
  render () {
    if (!this.props.choices) {
      return <h1>loading</h1>
    }
    const pollChoices = this.props.choices.map(choice => {
      return <button
        key={choice._id} 
        className="choice-response"
        onClick={(e) => this.updateVote(e, choice._id)}>
          {choice.response}
      </button>
    });

    const button = this.state.votedPolls.map(votedPoll => {
      let exp_date = new Date(this.props.poll.expiration_date);
      console.log(exp_date <= new Date());
      if (votedPoll._id === this.props.pollId || exp_date <= new Date() ) {
        return null;
      } else {
        return <button onClick={this.castVote} >Cast Vote</button>
      }
    })

    return (
      <div className="poll-choices">
        <ul className="choice-responses">
          {pollChoices}
        </ul>
        {button}
      </div>
    )
  }
}

export default Choices;