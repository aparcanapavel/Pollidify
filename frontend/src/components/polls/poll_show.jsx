import React from 'react';
import './poll_show.css';
import ChoicesContainer from "../choices/choices_container";

export default class PollShow extends React.Component{
  componentDidMount() {
    if (!this.props.inherited) this.props.fetchPoll(this.props.pollId);
  }
  
  render() {   
    if (!this.props.poll){
      return <h1>loading</h1>
    }
    let choices = this.props.inherited ? null : <ChoicesContainer history={this.props.history} />;

    return (
      <section className="poll-show-container">
        <h3>{this.props.poll.question}</h3>
        {choices}
      </section>
    );
  }
}