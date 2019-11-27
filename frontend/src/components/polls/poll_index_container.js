import { connect } from 'react-redux';
import { fetchPolls } from '../../actions/poll_actions';
import PollIndex from './poll_index';

const msp = (state) => {
  return {
    polls: Object.values(state.entities.polls.all)
  };
};

const mdp = dispatch => {
  return {
    fetchPolls: () => dispatch(fetchPolls())
  };
};


export default connect(msp, mdp)(PollIndex)