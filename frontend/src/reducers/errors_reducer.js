import { combineReducers } from "redux";

import SessionErrorsReducer from "./session_errors_reducer";
import PollFormErrorsReducer from './poll_form_errors_reducer';

export default combineReducers({
  session: SessionErrorsReducer,
  pollForm: PollFormErrorsReducer
});