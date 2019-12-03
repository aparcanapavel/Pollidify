import { connect } from 'react-redux';
import { fetchPolls, removePoll } from '../../actions/poll_actions';
import UserPolls from './user_polls.js';
import { fetchPoll } from "../../actions/poll_actions";
import { fetchChoices } from "../../actions/choice_actions";
import { fetchVotes } from "../../actions/votes_actions";
import { selectPolls } from '../../reducers/selectors';


const mapStateToProps = state => {
  let newCreated;
  let num;
  let num1 = 1;
  if (state.session.user.created.length > 7) {
    num = (state.session.user.created.length - 7)
    newCreated = state.session.user.created.slice(num)
  } else {
    newCreated = state.session.user.created;
  }
  if (Object.values(state.entities.polls).length <= 7) {
    num1 = 2
  } 
  return {
    polls: selectPolls(state, newCreated),
    currentUser: state.session.user,
    pollsDelete: selectPolls(state, state.session.user.created.slice(num1 - 1))
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