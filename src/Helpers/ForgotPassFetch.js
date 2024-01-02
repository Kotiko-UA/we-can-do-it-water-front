import axios from 'axios';
import { toast } from 'react-hot-toast';

axios.defaults.baseURL = 'https://water-p2oh.onrender.com/api';

export const checkUser = async email => {
  try {
    if (!email) {
      return toast.error('Enter email');
    }
    const res = await axios.post('/users/forgetpassword', { email });

    if (res.status === 200) {
      return toast.success(res.data.message);
    }
  } catch (error) {
    console.log(error);
    if (error.response.status === 404) {
      return toast.error(`Email ${email} not registered`);
    }
  }
};
