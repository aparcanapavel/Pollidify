import React from 'react';
import { Link } from 'react-router-dom';
import "./poll_index.css";


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
          <h2 className="poll-index-title">World Polls</h2>
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
