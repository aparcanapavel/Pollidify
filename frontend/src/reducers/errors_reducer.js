import { combineReducers } from "redux";

import SessionErrorsReducer from "./session_errors_reducer";
import ChoicesErrorsReducer from './choices_errors_reducers';
import PollsErrorsReducer from './polls_errors_reducer';

export default combineReducers({
  session: SessionErrorsReducer,
  poll: PollsErrorsReducer,
  choices: ChoicesErrorsReducer
});