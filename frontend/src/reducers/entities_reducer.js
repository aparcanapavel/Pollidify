import { combineReducers } from "redux";

import PollsReducer from "./polls_reducer";
import ChoicesReducer from "./choices_reducer";

export default combineReducers({
  polls: PollsReducer,
  choices: ChoicesReducer
});
