import { connect } from 'react-redux';
import PollShow from './poll_show';
import { fetchPoll } from '../../actions/poll_actions';
import { fetchChoices } from '../../actions/choice_actions';
import { fetchVotes } from '../../actions/votes_actions';

const mstp = (state, ownProps) => {
  if (ownProps.match) {
    return {
      poll: state.entities.polls.new,
      pollId: ownProps.match.params.id,
      loggedIn: state.session.isAuthenticated
    }
  } else {
    return {
      loggedIn: state.session.isAuthenticated
    }
  }
}

const mdtp = dispatch => {
  return {
    fetchPoll: pollId => dispatch(fetchPoll(pollId)),
    fetchVotes: choiceId => dispatch(fetchVotes(choiceId)),
    fetchChoices: pollId => dispatch(fetchChoices(pollId))
  }
}

export default connect(mstp, mdtp)(PollShow);