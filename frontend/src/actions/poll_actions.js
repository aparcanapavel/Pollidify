import {
  getPolls,
  getPoll,
  getUserPolls,
  writePoll,
  getVotedPolls
} from "../util/poll_api_util";

export const RECEIVE_POLLS = "RECEIVE_POLLS";
export const RECEIVE_USER_POLLS = "RECEIVE_USER_POLL";
export const RECEIVE_PAYLOAD = "RECEIVE_PAYLOAD";
export const RECEIVE_VOTED_POLLS = "RECEIVE_VOTED_POLLS";


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

export const receiveVotedPolls = votedPolls => {
  return {
    type: RECEIVE_VOTED_POLLS,
    votedPolls
  }
}

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

export const fetchVotedPolls = userId => dispatch => {
  return getVotedPolls(userId)
    .then(votedPolls => dispatch(receiveVotedPolls(votedPolls)))
    .catch(err => console.log(err));
}