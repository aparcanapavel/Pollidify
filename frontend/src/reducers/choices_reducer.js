import {
  RECEIVE_CHOICES,
  RECEIVE_CHOICE
} from '../actions/choice_actions';

const ChoicesReducer = (state = { all: {}, new: undefined }, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_CHOICES:
      newState.all = action.polls.data;
      return newState;
    case RECEIVE_CHOICE:
      newState.new = action.poll.data;
      return newState;
    default:
      return state;
  }
};

export default ChoicesReducer;