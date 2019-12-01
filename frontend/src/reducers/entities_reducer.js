import { combineReducers } from "redux";

import PollsReducer from "./polls_reducer";
import ChoicesReducer from "./choices_reducer";
import VotesReducer from "./votes_reducer";

export default combineReducers({
  polls: PollsReducer,
  choices: ChoicesReducer,
  votes: VotesReducer
});
