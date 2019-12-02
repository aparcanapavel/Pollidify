import { RECEIVE_VOTE, RECEIVE_VOTES } from '../actions/votes_actions';

const VotesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_VOTES:
      newState = action.votes.data;
      return newState;
    case RECEIVE_VOTE:
      let newVote = action.vote.data;
      newState[newVote._id] = newVote;
      return newState;
    default:
      return state;
  }
}

export default VotesReducer;