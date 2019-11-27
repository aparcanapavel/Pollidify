import React from 'react';
import { Link } from 'react-router-dom';


class PollIndex extends React.Component {
  constructor(props) {
    super(props);

  }

  componentWillMount() {
    this.props.fetchPolls();
  }

  render() {
    if (this.props.polls.length === 0) {
      return null
    } else {
      return (
        <div>
          <h2>All Polls</h2>
          {this.props.polls.map(poll => (
            <div> <Link to={`/polls/${poll.id}`}>{poll.question}</Link> </div>
          ))}
        </div>
      );
    }
  }
}

export default PollIndex;
