import Axios from 'axios';

export const signup = (userData) => {
  return Axios.post('/api/users/register', userData);
}

export const login = (userData) => {
  return Axios.post('/api/users/login', userData);
}