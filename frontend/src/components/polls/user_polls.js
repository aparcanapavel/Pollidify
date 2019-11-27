import React from 'react';
import PollShowContainer from './poll_show_container.js';
import './user_polls.css';

class UserPolls extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            polls: []
        }
    }
    
    componentWillMount() {
        console.log(this.props.currentUser.id)
        this.props.fetchUserPolls(this.props.currentUser.id);
    }

    componentWillReceiveProps(newState) {
        this.setState({ polls: newState.polls });
    }   
    
    render() {
        if (this.state.polls.length === 0) {
          return (
            <div classname="no-user-polls">
              <h2>You have no Polls</h2>
            </div>
          )
        } else {
          return (
            <div className="user-polls">
              <h2>All of Your Polls</h2>
              {this.state.polls.map(poll => (
                <PollShowContainer key={poll._id} question={poll.question} poll={poll} />
              ))}
            </div>
          );
        }
      }
}

export default UserPolls;