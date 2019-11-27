import React from 'react';
import PollShow from './poll_show.jsx';

class UserPolls extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            polls: []
        }
    }
    
    componentWillMount() {
      // debugger
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
                <PollShow key={poll._id} question={poll.question} />
              ))}
            </div>
          );
        }
      }
}

export default UserPolls;