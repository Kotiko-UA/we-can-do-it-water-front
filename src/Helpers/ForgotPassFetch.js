import axios from 'axios';
import { toast } from 'react-hot-toast';

axios.defaults.baseURL = 'http://localhost:8000/api';

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
    if (error.response.status === 409) {
      return toast.error(`Email ${email} not registered`);
    }
  }
};
