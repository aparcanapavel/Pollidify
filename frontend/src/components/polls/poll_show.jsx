import React from 'react';

export default class PollShow extends React.Component{
  constructor(props){
    super(props); 
  }
  
  // componentDidMount() {
  //   // console.log(this.props)
  //   if(!this.props.poll){
  //     this.props.fetchPoll(this.props.pollId);
  //   } else {
  //     this.setState({ poll: this.props.poll });
  //   }
  // }

  componentDidMount() {
    // debugger
    this.props.fetchPoll(this.props.pollId);
  }
  

  render() {
    debugger    
    if (!this.props.state.entities.polls.new){
      return <h1>loading</h1>
    }
    
      return (
        <section className="poll-show-container">
          <h3>{this.props.state.entities.polls.new.question}</h3>
          <ul className="poll-choices">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </section>
      );
  }
}