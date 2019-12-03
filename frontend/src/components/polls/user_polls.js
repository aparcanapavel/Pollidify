import React from 'react';
import PollShowContainer from './poll_show_container.js';
import { Link } from 'react-router-dom';
import './user_polls.css';

class UserPolls extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      choices: [],
      votes: [],
      loading: true
    }
  }
  
  componentDidMount() {
    this.props.fetchPolls().then(() => {
      let allUserPolls = this.props.pollsDelete;
      if (allUserPolls.length > 7) {
        let poll = allUserPolls[0];
        
        this.props.removePoll(poll._id);
      }
      this.setState({ loading: false });
    }) 
  }

  
  render() {
    if (this.state.loading) {
      return <h1>Loading</h1>;
    }
    
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
            <Link to={`/polls/${poll._id}`}>
              <PollShowContainer
              key={poll._id}
              question={poll.question}
              poll={poll}
              inherited={true}
              noGraph={true}
            /> 
            </Link>  
          );
        } else if (expDate < newDate) {
          expiredPolls.push(
            <Link to={`/polls/${poll._id}`}>
              <PollShowContainer
                key={poll._id}
                question={poll.question}
                poll={poll}
                inherited={true}
                noGraph={true}
              />
            </Link>
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