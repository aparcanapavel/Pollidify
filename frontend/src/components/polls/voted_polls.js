import React from 'react';
import PollShowContainer from './poll_show_container.js';
import { Link } from 'react-router-dom';
import './voted_polls.css'
import { FactsArr } from './random_poll_facts';

class VotedPolls extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
     loading: true
    }
  }

  componentDidMount() {
    this.props.fetchPolls().then(() => {
      if (this.props.polls) {
        this.setState({ loading: false });
      }
    })
  }


  render() {
    if (this.state.loading) {
      return <h1>Loading</h1>
    }

    if (this.props.polls.length === 0) {
      return (
        <div className="no-voted-polls">
          <h3>Voted Polls (0)</h3>
          <p>You have no voted Polls</p>
          <p>Vote for a poll to gain access to its statistics when it finishes!</p>
        </div>
      )
    } else {
      return (
        <div className="voted-polls-container">
          <h3>Voted Polls ({this.props.polls.length})</h3>
          <ul className="voted-poll">
            {this.props.polls.map(poll => (
              <li key={poll._id} className="poll-voted">
                <Link to={`/polls/${poll._id}`}>{poll.question}</Link> 
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }
}

export default VotedPolls;
