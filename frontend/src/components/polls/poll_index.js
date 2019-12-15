import React from 'react';
import { Link } from 'react-router-dom';
import "./poll_index.css";
import { FactsArr } from './random_poll_facts';

class PollIndex extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      loading: true
    }
  }
  componentDidMount() {
    this.props.fetchPolls().then(() => this.setState({ loading: false }));
  }

  render() {
    if (this.state.loading) {
      return <h3>loading...</h3>
    }
    const { user } = this.props;
    return (
      <div className="poll-index-main">
        <div className="poll-index-cont"> 
          <h3>World Polls</h3>
          <ul className="poll-index-links"> 
          {this.props.polls.map(poll => (
            <li key={poll._id}><Link to={`/polls/${poll._id}`}>{poll.question}</Link></li>
          ))}
          </ul>
        </div>
        <div className="poll-index-right">
          <h2 className="poll-index-title">{user.username}</h2>
          <div className="side-user-links">
            <Link to={`/polls/voted/${user.id}`}>Voted Polls</Link>
            <Link to={`/polls/user/${user.id}`}>My Polls</Link>
          </div>
          <h3 className="poll-count">Total Pollidified Polls: {this.props.polls.length}</h3>
          <h3 className="did-you-know">Did You Know?</h3> 
          <h4 className="random-poll-fact">{FactsArr[Math.floor(Math.random() * FactsArr.length)]}</h4>
        </div>
      </div>
    );
  }
}

export default PollIndex;
