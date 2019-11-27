import axios from 'axios';

export const fetchChoices = (pollId) => {
  return axios.get(`/api/choices/${pollId}`)
}

export const createChoice = (pollId, data) => {
  return axios.post(`/api/choices/${pollId}`, data)
}