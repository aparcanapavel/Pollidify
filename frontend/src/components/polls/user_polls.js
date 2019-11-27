import React from 'react';
import PollShowContainer from './poll_show_container.js';

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
          return (<div>This user has no Polls</div>)
        } else {
          return (
            <div>
              <h2>All of This User's Polls</h2>
              {this.state.polls.map(poll => (
                <PollShowContainer key={poll._id} question={poll.question} poll={poll} />
              ))}
            </div>
          );
        }
      }
}

export default UserPolls;