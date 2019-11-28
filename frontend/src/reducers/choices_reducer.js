import { RECEIVE_CHOICES } from '../actions/choice_actions';
import { RECEIVE_PAYLOAD } from '../actions/poll_actions';

const ChoicesReducer = (state = { all: {}, new: undefined }, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_CHOICES:
      newState.all = action.choices.data;
      return newState;
    case RECEIVE_PAYLOAD:
      newState.new = action.payload.choices;
      return newState;
    default:
      return state;
  }
};

export default ChoicesReducer;