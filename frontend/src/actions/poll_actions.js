import { getPolls, getPoll, getUserPolls, writePoll } from '../util/poll_api_util';

export const RECEIVE_POLLS = "RECEIVE_POLLS";
export const RECEIVE_USER_POLLS = "RECEIVE_USER_POLL";
export const RECEIVE_PAYLOAD = "RECEIVE_PAYLOAD";


export const receivePolls = polls => ({
  type: RECEIVE_POLLS,
  polls
});

export const receiveUserPolls = polls => ({
  type: RECEIVE_USER_POLLS,
  polls
});

export const receivePoll = payload => {
  return {
    type: RECEIVE_PAYLOAD,
    payload
  }
};


export const fetchPolls = () => dispatch => (
  getPolls()
    .then(polls => dispatch(receivePolls(polls)))
    .catch(err => console.log(err))
);

export const fetchUserPolls = id => dispatch => {
  return getUserPolls(id)
    .then(polls => dispatch(receiveUserPolls(polls)))
    .catch(err => console.log(err))
};

export const createPoll = data => dispatch => {
  debugger;
  return writePoll(data)
    .then(payload => {
      dispatch(receivePoll(payload));
    }).catch(err => console.log(err))
  };

export const fetchPoll = (id) => dispatch => {
  return getPoll(id)
    .then(poll => dispatch(receivePoll(poll)))
    .catch(err => console.log(err))
}