import {
  RECEIVE_POLLS,
  RECEIVE_PAYLOAD,
  // RECEIVE_USER_POLLS,
  // RECEIVE_VOTED_POLLS,
  REMOVE_POLL,
} from '../actions/poll_actions';

const PollsReducer = ( state = {}, action) => {
  Object.freeze(state);
  let newState = {};
  switch(action.type) {
    case RECEIVE_POLLS:
      newState = Object.assign({}, state, action.polls.data);
      return newState;
    // case RECEIVE_USER_POLLS:
    //   newState = Object.assign({}, action.polls.data);
    //   return newState;
    // case RECEIVE_VOTED_POLLS:
    //   newState = Object.assign({}, action.votedPolls.data);
    //   return newState;
    case RECEIVE_PAYLOAD:
      let newPoll = action.payload.data.poll;
      newState = Object.assign({}, state, {[newPoll._id]: newPoll});
     return newState;
    case REMOVE_POLL:
      newState = Object.assign({}, state);
      delete newState[action.pollId];
      return newState;
    default:
      return state;
  }
};

export default PollsReducer;