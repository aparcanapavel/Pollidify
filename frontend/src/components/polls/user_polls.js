import React from 'react';
import PollShowContainer from './poll_show_container.js';
import './user_polls.css';

class UserPolls extends React.Component {
  componentDidMount() {
    this.props.fetchUserPolls(this.props.currentUser.id);
  }
  
  render() {
    if (this.props.polls.length === 0) {
      return (
        <div className="no-user-polls">
          <h2>You have no Polls</h2>
        </div>
      )
    } else {
      return (
        <div className="user-polls">
          <h2>All of Your Polls</h2>
          <div className="user-poll">
            <div classname="active-polls">
              {this.props.polls.reverse().map(poll => {
                let expDate = new Date(poll.expiration_date);
                let newDate = new Date();
                if (expDate >= newDate) {
                  return <PollShowContainer key={poll._id} question={poll.question} poll={poll} inherited={true} />
                }
              })}
            </div>
            <div className="expired-polls">
              {this.props.polls.reverse().map(poll => {
                let expDate = new Date(poll.expiration_date);
                let newDate = new Date();
                if (expDate < newDate) {
                  return <PollShowContainer key={poll._id} question={poll.question} poll={poll} inherited={true} />      
                }})
              }
            </div>
          </div>
        </div>
      );
    }
  }
}

export default UserPolls;