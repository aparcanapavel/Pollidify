import { getPolls, getPoll, getUserPolls, writePoll } from '../util/poll_api_util';

export const RECEIVE_POLLS = "RECEIVE_POLLS";
export const RECEIVE_USER_POLLS = "RECEIVE_USER_POLL";
export const RECEIVE_POLL = "RECEIVE_NEW_POLL";


export const receivePolls = polls => ({
  type: RECEIVE_POLLS,
  polls
});

export const receiveUserPolls = polls => ({
  type: RECEIVE_USER_POLLS,
  polls
});

export const receivePoll = poll => ({
  type: RECEIVE_POLL,
  poll
});


export const fetchPolls = () => dispatch => (
  getPolls()
    .then(polls => dispatch(receivePolls(polls)))
    .catch(err => console.log(err))
);

export const fetchUserPolls = id => dispatch => (
  getUserPolls(id)
    .then(polls => dispatch(receiveUserPolls(polls)))
    .catch(err => console.log(err))
);

export const createPoll = data => dispatch => (
  writePoll(data)
    .then(poll => dispatch(receivePoll(poll)))
    .catch(err => console.log(err))
);

export const fetchPoll = (id) => dispatch => (
  getPoll(id)
    .then(poll => dispatch(receivePoll(poll)))
    .catch(err => console.log(err))
)