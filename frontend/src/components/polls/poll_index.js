import React from 'react';
import { Link } from 'react-router-dom';
import "./poll_index.css"


class PollIndex extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchPolls();
  }

  render() {
    if (!this.props.polls) {
      return null
    } 
      return (
        <div className="poll-index-main">
          <h2 className="poll-index-h2">World Polls</h2>
          {this.props.polls.map(poll => (
            <div className="poll-index-link"> 
           <div className="poll-index-link-link"> <Link to={`/polls/${poll._id}`}>{poll.question}</Link> </div>
            </div>
          ))}
        </div>
      );
    }
  }


export default PollIndex;
