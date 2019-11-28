import { RECEIVE_VOTE, RECEIVE_VOTES } from '../actions/votes_actions';

const VotesReducer = (state = { all: {}, new: undefined }, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_VOTES:
      newState.all = action.votes
      return newState;

    case RECEIVE_VOTE:
      newState.all = action.vote
      return newState;
      
    default:
      return state;
  }
  
}