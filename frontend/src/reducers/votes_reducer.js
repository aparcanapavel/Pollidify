import { RECEIVE_VOTE, RECEIVE_VOTES } from '../actions/votes_actions';

const VotesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = {};
  switch (action.type) {
    case RECEIVE_VOTES:
      newState = Object.assign({}, state);
      newState = action.votes.data;
      return newState;
    default:
      return state;
  }
}

export default VotesReducer;