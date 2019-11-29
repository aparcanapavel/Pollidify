import * as ChoiceAPI from "../util/choice_api_util";

export const RECEIVE_CHOICES = "RECEIVE_CHOICES";
export const RECEIVE_CHOICES_ERRORS = "RECEIVE_CHOICES_ERRORS";

const receiveChoices = choices => {
  return {
    type: RECEIVE_CHOICES,
    choices
  }
}

const receiveChoiceErrors = errors => {
  return {
    type: RECEIVE_CHOICES_ERRORS,
    errors
  }
}

export const fetchChoices = pollId => dispatch => {
  return ChoiceAPI.fetchChoices(pollId)
    .then(choices => dispatch(receiveChoices(choices)))
    .catch(err => dispatch(receiveChoiceErrors(err.response.data)));
}