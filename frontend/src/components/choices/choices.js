import React from 'react';

class Choices extends React.Component {
  constructor(props){
    super(props);
    // this.castVote = this.castVote.bind(this);
  }

  // castVote(choiceId){
  //   // debugger
  //   console.log(choiceId);
  //   this.props.createVote(choiceId);
  // }

  componentDidMount () {
    this.props.fetchChoices(this.props.pollId).then(() => {
      this.forceUpdate(); // for martin
    });
  }

  render () {
    if (!this.props.choices) {
      this.forceUpdate();
      return <h1>loading</h1>
    }
    const pollChoices = this.props.choices.map(choice => {
      return <button
        key={choice._id} 
        className="choice-response"
        onClick={() => this.props.createVote(choice._id)}>
          {choice.response}
      </button>
    });


    return (
      <div className="poll-choices">
        <ul className="choice-responses">
          {pollChoices}
        </ul>
      </div>
    )
  }
}


export default Choices;