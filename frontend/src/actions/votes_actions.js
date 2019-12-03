import * as VoteAPI from '../util/vote_api_util';
import * as APIUtil from "../util/session_api_util";
export const RECEIVE_VOTES = "RECEIVE_VOTES";
export const RECEIVE_VOTE = "RECEIVE_VOTE";

const receiveVotes = votes => {
  return {
    type: RECEIVE_VOTES,
    votes
  }
}

const receiveVote = vote => {
  return {
    type: RECEIVE_VOTE,
    vote
  }
}

export const fetchVotes = choiceId => dispatch => {
  return VoteAPI.getVotes(choiceId)
    .then(votes => dispatch(receiveVotes(votes)))
    .catch(err => console.log(err));
}

export const createVote = choiceId => dispatch => {
  return VoteAPI.createVote(choiceId)
    .then(vote => {

      const { token } = vote.data;
      localStorage.setItem("jwtToken", token);
      APIUtil.setAuthToken(token);
      dispatch(receiveVote(vote));
    })
    .catch(err => console.log(err));
}