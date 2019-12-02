import React from 'react';
import PollShowContainer from './poll_show_container.js';
import './user_polls.css';

class UserPolls extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      choices: [],
      votes: []
    }
  }
  
  componentDidMount() {
    this.props.fetchUserPolls(this.props.currentUser.id).then(userPolls => {
      let allUserPolls = userPolls.polls.data;
      if (allUserPolls.length > 7) {
        let poll = allUserPolls[0];
        this.props.removePoll(poll._id);
        this.forceUpdate();
      }
    });
  }
  
  render() {
    if (this.props.polls.length === 0) {
      return (
        <div className="no-user-polls">
          <h2>You have no Polls</h2>
        </div>
      )
    } else {  
      let expiredPolls = [];
      let activePolls = [];
      this.props.polls.reverse().forEach(poll => {
        let expDate = new Date(poll.expiration_date);
        let newDate = new Date();

        if (expDate >= newDate) {
          activePolls.push(
            <PollShowContainer
              key={poll._id}
              question={poll.question}
              poll={poll}
              inherited={true}
            />
          );
        } else if (expDate < newDate) {
          expiredPolls.push(<PollShowContainer 
            key={poll._id} 
            question={poll.question} 
            poll={poll} 
            inherited={true} 
            />  
            );    
        }
      });
      
      return (
        <div className="user-poll-main">
          <h2 className="user-poll-title">All of Your Polls</h2>
          <div className="user-poll-cont">
            <div className="active-polls">
              {activePolls}
            </div>
            <div className="expired-polls">
              {expiredPolls}
            </div>
          </div>
        </div>
      );
    }
  }
}

export default UserPolls;