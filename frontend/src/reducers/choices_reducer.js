import { RECEIVE_CHOICES } from '../actions/choice_actions';
import { RECEIVE_PAYLOAD } from '../actions/poll_actions';

const ChoicesReducer = (state = { }, action) => {
  Object.freeze(state);
  
  switch(action.type) {
    case RECEIVE_CHOICES:
      return Object.assign({}, action.choices.data);
      
    case RECEIVE_PAYLOAD:
      return Object.assign({}, action.payload.data.choices);

    default:
      return state;
  }
};

export default ChoicesReducer;