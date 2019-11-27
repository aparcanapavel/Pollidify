import React from 'react';

export default class PollShow extends React.Component{
  constructor(props){
    super(props); 
    this.state = {
      poll: null
    }
  }

  componentDidMount() {
    debugger
    console.log(this.props)
    if(!this.props.poll){
      this.props.fetchPoll(this.props.pollId);
    } else {
      this.setState({ poll: this.props.poll });
    }
  }

  componentWillReceiveProps(newState) {
    this.setState({ poll: newState.entities.props });
  }
  

  render() {
    if(!this.state.poll){
      return <h1>loading</h1>
    }

    
    
    return <section className="poll-show-container">
      <h3>{this.state.poll.question}</h3>
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