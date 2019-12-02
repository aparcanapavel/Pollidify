import {
  RECEIVE_POLLS,
  RECEIVE_PAYLOAD,
  RECEIVE_USER_POLLS,
  RECEIVE_VOTED_POLLS,
  REMOVE_POLL,
} from '../actions/poll_actions';

const PollsReducer = (
  state = {}, 
  action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_POLLS:
      newState = action.polls.data;
      return newState;
    case RECEIVE_USER_POLLS:
      newState = action.polls.data;
      return newState;
    case RECEIVE_PAYLOAD:
      newState = action.payload.data;
      debugger;
      return newState;
    case RECEIVE_VOTED_POLLS:
      newState = action.votedPolls.data;
      return newState;
    case REMOVE_POLL:
      let newerState = Object.assign({}, state);
      delete newerState[action.pollId];
      return newerState;
    default:
      return state;
  }
};

export default PollsReducer;