import {
  getPolls,
  getPoll,
  getUserPolls,
  writePoll,
  getVotedPolls,
  deletePoll
} from "../util/poll_api_util";

export const RECEIVE_POLLS = "RECEIVE_POLLS";
export const RECEIVE_USER_POLLS = "RECEIVE_USER_POLL";
export const RECEIVE_PAYLOAD = "RECEIVE_PAYLOAD";
export const RECEIVE_VOTED_POLLS = "RECEIVE_VOTED_POLLS";
export const RECEIVE_POLL_ERRORS = 'RECEIVE_POLL_ERRORS';
export const REMOVE_POLL = 'REMOVE_POLL';

export const receivePolls = polls => ({
  type: RECEIVE_POLLS,
  polls
});

export const receiveUserPolls = polls => ({
  type: RECEIVE_USER_POLLS,
  polls
});

export const receivePoll = payload => {
  // debugger
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

export const receivePollErrors = errors => {
  return {
    type: RECEIVE_POLL_ERRORS,
    errors
  }
}

export const destroyPoll = pollId => {
  return {
    type: REMOVE_POLL,
    pollId
  }
}

export const fetchPolls = () => dispatch => (
  getPolls()
    .then(polls => dispatch(receivePolls(polls)))
    .catch(err => dispatch(receivePollErrors(err.response.data))) //may need to be err.responseJSON
);

export const fetchUserPolls = id => dispatch => {
  return getUserPolls(id)
    .then(polls => dispatch(receiveUserPolls(polls)))
    .catch(err => dispatch(receivePollErrors(err.response.data)))
};

export const createPoll = data => dispatch => {

  return writePoll(data)
    .then(payload => {
      
      dispatch(receivePoll(payload));
    }).catch(err => dispatch(receivePollErrors(err.response.data)))
  };

export const fetchPoll = (id) => dispatch => {
  // debugger;
  return getPoll(id)
    .then(poll => dispatch(receivePoll(poll)))
    .catch(err => dispatch(receivePollErrors(err.response.data)))
}

export const fetchVotedPolls = userId => dispatch => {
  return getVotedPolls(userId)
    .then(votedPolls => dispatch(receiveVotedPolls(votedPolls)))
    .catch(err => console.log(err));
}

export const removePoll = pollId => dispatch => {
  return deletePoll(pollId)
    .then(() => dispatch(destroyPoll(pollId)))
    .catch(err => console.log(err));
}