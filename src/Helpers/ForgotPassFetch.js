import axios from 'axios';

//axios.defaults.baseURL = 'https://water-p2oh.onrender.com/api';

export const checkUser = async body => {
  try {
    const res = await axios.get('/users/forgetpassword', body);
    return res.data;
  } catch (error) {
    return error.message;
  }
};
