import React from 'react';
import { Link } from 'react-router-dom';
import "./poll_index.css";
import { FactsArr } from './random_poll_facts';

class PollIndex extends React.Component {
  componentDidMount() {
    this.props.fetchPolls();
  }

  render() {
    if (!this.props.polls) {
      return null
    } 
    return (
      <div className="poll-index-main">
        <div className="poll-index-left">
          <h2 className="poll-index-title">World Polls</h2>
          <h3 className="poll-count">Total Pollidified Polls: {this.props.polls.length}</h3>
          <h3 className="did-you-know">Did You Know?</h3> 
          <h4 className="random-poll-fact">{FactsArr[Math.floor(Math.random() * FactsArr.length)]}</h4>
        </div>
        <div className="poll-index-cont"> 
          <ul className="poll-index-links"> 
          {this.props.polls.map(poll => (
            <li key={poll._id}><Link to={`/polls/${poll._id}`}>{poll.question}</Link></li>
          ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default PollIndex;
