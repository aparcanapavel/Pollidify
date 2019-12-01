import { RECEIVE_VOTE, RECEIVE_VOTES } from '../actions/votes_actions';

const VotesReducer = (state = { all: {}, new: undefined }, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_VOTES:
      newState.all = action.votes.data;
      return newState;

    case RECEIVE_VOTE:
      newState.new = action.vote.data
      return newState;
      
    default:
      return state;
  }
}

export default VotesReducer;