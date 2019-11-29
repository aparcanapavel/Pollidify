import { RECEIVE_CHOICES, RECEIVE_CHOICES_ERRORS } from '../actions/choice_actions';

const _nullErrors = [];

const ChoicesErrorsReducer = (state = _nullErrors, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CHOICES:
      return _nullErrors
    
    case RECEIVE_CHOICES_ERRORS:
      return Object.assign({},state, action.errors);
  
    default:
      return state;
  }
}

export default ChoicesErrorsReducer;