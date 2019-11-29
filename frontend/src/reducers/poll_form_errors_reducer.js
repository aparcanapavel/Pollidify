import ChoicesErrorsReducer from './choices_errors_reducers';
import PollsErrorsReducer from './polls_errors_reducer';
import { combineReducers } from "redux";

export default combineReducers({
  polls: PollsErrorsReducer,
  choices: ChoicesErrorsReducer
})