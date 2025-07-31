import axios from '../../../lib/axios';

export const loginAPI = async (payload) => {
  const res = await axios.post('/login', payload);
  console.log(res)
  return res.data;
};

export const registerAPI = async (payload) => {
  const res = await axios.post('/register', payload);
  return res.data;
};