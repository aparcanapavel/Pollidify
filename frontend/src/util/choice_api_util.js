import axios from 'axios';

export const fetchChoices = (pollId) => {
  return axios.get(`/api/choices/${pollId}`)
}
