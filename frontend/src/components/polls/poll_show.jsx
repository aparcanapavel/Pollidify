import React from 'react';

export default class PollShow extends React.Component{
  constructor(props){
    super(props); 

  }

  componentWillMount() {
    // debugger
    this.props.fetchPoll(this.props.pollId);
  }
  

  render() {
    // debugger    
    
    return <section className="poll-show-container">
      <h3>{this.props.state.entities.polls.new.question}</h3>
      <ul className="poll-choices">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </section>
  }
}