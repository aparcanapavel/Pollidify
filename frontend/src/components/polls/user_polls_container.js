import { connect } from 'react-redux';
import { fetchUserPolls, removePoll } from '../../actions/poll_actions';
import UserPolls from './user_polls.js';
import { fetchPoll } from "../../actions/poll_actions";
import { fetchChoices } from "../../actions/choice_actions";
import { fetchVotes } from "../../actions/votes_actions";


const mapStateToProps = state => {
  return {
    polls: Object.values(state.entities.polls.user),
    currentUser: state.session.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserPolls: id => dispatch(fetchUserPolls(id)),
    removePoll: pollId => dispatch(removePoll(pollId)),
    fetchPoll: pollId => dispatch(fetchPoll(pollId)),
    fetchChoices: pollId => dispatch(fetchChoices(pollId)),
    fetchVotes: choiceId => dispatch(fetchVotes(choiceId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPolls);