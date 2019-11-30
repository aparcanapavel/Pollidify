import { connect } from 'react-redux';
import Choices from './choices';
import { fetchChoices } from "../../actions/choice_actions";
import { createVote } from '../../actions/votes_actions';
import { fetchVotedPolls } from '../../actions/poll_actions';

const msp = (state, ownProps) => {
  return {
    pollId: ownProps.pollId,
    choices: Object.values(state.entities.choices.all),
    currentUserId: state.session.user.id,
    ownProps
  };
};

const mdp = dispatch => {
  return {
    fetchChoices: (pollId) => dispatch(fetchChoices(pollId)),
    createVote: choiceId => dispatch(createVote(choiceId)),
    fetchVotedPolls: currentUserId => dispatch(fetchVotedPolls(currentUserId))
  };
};


export default connect(msp, mdp)(Choices);
