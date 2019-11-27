import * as ChoiceAPI from "../util/choice_api_util";

export const RECEIVE_CHOICES = "RECEIVE_CHOICES";
export const RECEIVE_CHOICE = "RECEIVE_CHOICES";

const receiveChoices = choices => {
  return {
    type: RECEIVE_CHOICES,
    choices
  }
}

const receiveChoice = choice => {
  return {
    type: RECEIVE_CHOICE,
    choice
  }
}

export const fetchChoices = pollId => dispatch => {
  return ChoiceAPI.fetchChoices(pollId)
    .then(choices => dispatch(receiveChoices(choices)))
    .catch(err => console.log(err));
}

export const createChoice = (pollId,choice) => dispatch => {
  return ChoiceAPI.createChoice(pollId, choice)
    .then(choice => dispatch(receiveChoice(choice)))
    .catch(err => console.log(err));
}