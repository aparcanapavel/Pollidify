import React from 'react';
import PollShowContainer from './poll_show_container.js';
import { Link } from 'react-router-dom';
import './voted_polls.css'

class VotedPolls extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
     loading: true
    }
  }

  componentDidMount() {
    if(this.props.polls){
      this.setState({ loading: false });
    }
  }


  render() {
    if (this.state.loading) {
      return <h1>Loading</h1>
    }

    if (this.props.polls.length === 0) {
      return (
        <div className="no-user-polls">
          <h2 className="voted-poll-h2">You have no voted Polls</h2>
        </div>
      )
    } else {
      return (
        <div className="voted-polls">
          <h2 className="voted-poll-h2">All of Your Voted Polls</h2>
          <div className="voted-poll-cont">
            <ul className="voted-poll">
              {this.props.polls.map(poll => (
                <li className="poll-voted"><Link to={`/polls/${poll._id}`}><PollShowContainer key={poll._id} question={poll.question} poll={poll} inherited={true} noGraph={true} /> </Link> </li>
              ))}
            </ul>
          </div>
        </div>
      );
    }
  }
}

export default VotedPolls;
