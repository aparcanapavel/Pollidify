import axios from 'axios';

export const getPolls = () => {
  return axios.get('/api/polls')
}

export const getUserPolls = id => {
  return axios.get(`/api/polls/user/${id}`)
}

export const getPoll = id => {
  return axios.get(`/api/polls/${id}`)
}

export const writePoll = data => {
  debugger;
  return axios.post('/api/polls', data)
}