import { connect } from 'react-redux';
import Choices from './choices';
import { fetchChoices } from "../../actions/choice_actions";
import { createVote } from '../../actions/votes_actions';
import { selectPolls } from '../../reducers/selectors';

const msp = (state, ownProps) => {
  return {
    pollId: ownProps.pollId,
    choices: Object.values(state.entities.choices),
    votedPolls: selectPolls(state, state.session.user.voted),
    currentUserId: state.session.user.id,
    ownProps
  };
};

const mdp = dispatch => {
  return {
    fetchChoices: (pollId) => dispatch(fetchChoices(pollId)),
    createVote: choiceId => dispatch(createVote(choiceId))
  };
};


export default connect(msp, mdp)(Choices);
