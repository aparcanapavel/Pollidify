import * as ChoiceAPI from "../util/choice_api_util";

export const RECEIVE_CHOICES = "RECEIVE_CHOICES";

const receiveChoices = choices => {
  return {
    type: RECEIVE_CHOICES,
    choices
  }
}

export const fetchChoices = pollId => dispatch => {
  return ChoiceAPI.fetchChoices(pollId)
    .then(choices => dispatch(receiveChoices(choices)))
    .catch(err => console.log(err));
}