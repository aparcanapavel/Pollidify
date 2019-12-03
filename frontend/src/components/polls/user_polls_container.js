import { connect } from 'react-redux';
import { fetchPolls, removePoll } from '../../actions/poll_actions';
import UserPolls from './user_polls.js';
import { fetchPoll } from "../../actions/poll_actions";
import { fetchChoices } from "../../actions/choice_actions";
import { fetchVotes } from "../../actions/votes_actions";
import { selectPolls } from '../../reducers/selectors';


const mapStateToProps = state => {
  return {
    polls: selectPolls(state, state.session.user.created),
    currentUser: state.session.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPolls: () => dispatch(fetchPolls()),
    removePoll: pollId => dispatch(removePoll(pollId)),
    fetchPoll: pollId => dispatch(fetchPoll(pollId)),
    fetchChoices: pollId => dispatch(fetchChoices(pollId)),
    fetchVotes: choiceId => dispatch(fetchVotes(choiceId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPolls);