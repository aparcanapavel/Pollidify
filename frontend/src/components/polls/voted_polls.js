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
          <h2>You have no voted Polls</h2>
          <h3>Vote for a poll to gain access to its statistics when it finishes!</h3>
        </div>
      )
    } else {
      return (
        <div className="voted-polls">
          <div className="voted-polls-sidebar">
            <h2 className="voted-poll-h2">Your Voted Polls</h2>
            <h3 className="poll-count">Total Voted Polls: {this.props.polls.length}</h3>
            <h3 className="did-you-know">Did You Know?</h3> 
            <h4 className="random-poll-fact">{FactsArr[Math.floor(Math.random() * FactsArr.length)]}</h4>
          </div>
          <div className="voted-poll-cont">
            <ul className="voted-poll">
              {this.props.polls.map(poll => (
                <li key={poll._id} className="poll-voted"><Link to={`/polls/${poll._id}`}><PollShowContainer key={poll._id} question={poll.question} poll={poll} inherited={true} noGraph={true} /> </Link> </li>
              ))}
            </ul>
          </div>
        </div>
      );
    }
  }
}

export default VotedPolls;
