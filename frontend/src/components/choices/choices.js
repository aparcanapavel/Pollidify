import React from 'react';
import './choice.css';

class Choices extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      choiceId: null
    }
    this.timer = null; 
    this.castVote = this.castVote.bind(this);
    this.updateVote = this.updateVote.bind(this);
  }

  castVote(){
    this.props.createVote(this.state.choiceId);
  }

  updateVote(e, choiceId) {
    const choices = document.getElementsByClassName("choice-response");

    this.timer = setTimeout(() => {
      console.log("changing state..")
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
      this.forceUpdate(); // for martin
    });
  }

  componentWillUnmount(){
    clearTimeout(this.timer);
  }

  render () {
    if (!this.props.choices) {
      this.forceUpdate();
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


    return (
      <div className="poll-choices">
        <ul className="choice-responses">
          {pollChoices}
        </ul>
        <button onClick={this.castVote} >Cast Vote</button>
      </div>
    )
  }
}


export default Choices;