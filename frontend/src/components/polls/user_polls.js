import React from 'react';
import PollShowContainer from './poll_show_container.js';
import { Link } from 'react-router-dom';
import './user_polls.css';
import { FactsArr } from './random_poll_facts';

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
        <div className="zero-user-polls">
          <h3>My Polls ({this.props.polls.length})</h3>
          <p>You have no Polls</p>
          <p>Create a poll and find out what the world has to say about your topic!</p>
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
            <li key={poll._id}>
              <Link to={`/polls/${poll._id}`} key={poll._id}>
                {poll.question}
              </Link>  
            </li>
          );
        } else if (expDate < newDate) {
          expiredPolls.push(
            <li key={poll._id}>
              <Link to={`/polls/${poll._id}`}>
                {poll.question}
              </Link>
            </li>
          );    
        }
      });
      
      return (
        <div className="user-poll-container">
          <h3>My Polls ({this.props.polls.length})</h3>
          <ul className="active-polls">
            {activePolls.length > 0 ? <h3>Active Polls</h3> : null}
            {activePolls}
          </ul>
          <ul className="expired-polls">
            {expiredPolls.length > 0 ? <h3>Expired Polls</h3> : null}
            {expiredPolls}
          </ul>
        </div>
      );
    }
  }
}

export default UserPolls;