import axios from 'axios';
import { toast } from 'react-hot-toast';

axios.defaults.baseURL = 'https://water-p2oh.onrender.com/api';

export const checkUser = async email => {
  try {
    if (!email) {
      return toast.error('Enter email');
    }
    const res = await axios.post('/users/forgotpassword', { email });

    if (res.status === 200) {
      toast.success(`New password send to email, check your emailBox`);
    }
  } catch (error) {
    if (error.response.status !== 404) {
      return toast.error(`Email ${email} not correct`);
    }
    toast.error(`Email ${email} not registered`);
  }
};
