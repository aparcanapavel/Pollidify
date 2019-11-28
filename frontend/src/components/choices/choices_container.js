import { connect } from 'react-redux';
import Choices from './choices';
import { fetchChoices } from "../../actions/choice_actions";

const msp = (state, ownProps) => {
  return {
    pollId: ownProps.match.params.id,
    choices: Object.values(state.entities.choices.all)
  };
};

const mdp = dispatch => {
  return {
    fetchChoices: (pollId) => dispatch(fetchChoices(pollId))
  };
};


export default connect(msp, mdp)(Choices)
