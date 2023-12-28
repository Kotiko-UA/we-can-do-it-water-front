import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8000/api';

export const checkUser = async body => {
  try {
    const res = await axios.get('/users/forgetpassword', body);
    return res.data;
  } catch (error) {
    return error.message;
  }
};
