import { RECEIVE_PAYLOAD, RECEIVE_POLLS, RECEIVE_POLL_ERRORS } from '../actions/poll_actions';

const _nullErrors = [];

const PollsErrorsReducer = (state = _nullErrors, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_PAYLOAD:
      return _nullErrors;
    
    case RECEIVE_POLLS:
      return _nullErrors;

    case RECEIVE_POLL_ERRORS:
      return Object.assign({}, state, action.error);
  
    default:
      return state;
  }
}

export default PollsErrorsReducer;