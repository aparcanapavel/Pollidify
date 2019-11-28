import axios from 'axios';

export const getVotes = (choiceId) => {
  return axios.get(`/api/votes/${choiceId}`)
}

export const createVote = (choiceId) => {
  return axios.post(`/api/votes/${choiceId}`)
}
