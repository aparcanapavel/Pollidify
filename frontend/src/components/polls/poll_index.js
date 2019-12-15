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
      <div className="poll-index-cont"> 
        <h3>World Polls</h3>
        <ul className="poll-index-links"> 
        {this.props.polls.map(poll => (
          <li key={poll._id}><Link to={`/polls/${poll._id}`}>{poll.question}</Link></li>
        ))}
        </ul>
      </div>
    );
  }
}

export default PollIndex;
