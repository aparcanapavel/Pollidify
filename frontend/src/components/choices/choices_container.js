import { connect } from 'react-redux';
import Choices from './choices';
import { fetchChoices } from "../../actions/choice_actions";
import { createVote } from '../../actions/votes_actions';

const msp = (state, ownProps) => {
  return {
    pollId: ownProps.pollId,
    choices: Object.values(state.entities.choices.all),
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
