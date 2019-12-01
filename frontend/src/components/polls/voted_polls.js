import React from 'react';
import PollShowContainer from './poll_show_container.js';

class VotedPolls extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
     loading: true
    }
  }

  componentDidMount() {
    this.props.fetchVotedPolls(this.props.currentUser.id).then(() => this.setState({loading: false}));
  }


  render() {
    if (this.state.loading) {
      return <h1>Loading</h1>
    }

    if (this.props.polls.length === 0) {
      return (
        <div className="no-user-polls">
          <h2>You have no voted Polls</h2>
        </div>
      )
    } else {
      return (
        <div className="voted-polls">
          <h2>All of Your Voted Polls</h2>
          <div className="voted-poll">
            {this.props.polls.map(poll => (
              <PollShowContainer key={poll._id} question={poll.question} poll={poll} inherited={true} noGraph={true} />
            ))}
          </div>
        </div>
      );
    }
  }
}

export default VotedPolls;
