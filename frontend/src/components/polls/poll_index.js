import React from 'react';
import { Link } from 'react-router-dom';


class PollIndex extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchPolls();
  }

  render() {
    debugger
    if (!this.props.polls) {
      return null
    } 
      return (
        <div>
          <h2>All Polls</h2>
          {this.props.polls.map(poll => (
            <div> <Link to={`/polls/${poll._id}`}>{poll.question}</Link> </div>
          ))}
        </div>
      );
    }
  }


export default PollIndex;
