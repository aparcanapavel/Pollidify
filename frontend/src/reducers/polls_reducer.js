import {
  RECEIVE_POLLS,
  RECEIVE_PAYLOAD,
  RECEIVE_USER_POLLS
} from '../actions/poll_actions';

const PollsReducer = (state = { all: {}, user: {}, new: undefined }, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_POLLS:
      newState.all = action.polls.data;
      return newState;
    case RECEIVE_USER_POLLS:
      newState.user = action.polls.data;
      return newState;
    case RECEIVE_PAYLOAD:
      newState.new = action.payload.poll;
      return newState;
    default:
      return state;
  }
};

export default PollsReducer;