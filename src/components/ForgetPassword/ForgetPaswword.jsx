import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import {
  Wrap,
  Label,
  Input,
  Button,
  Form,
  StyledLink,
} from './ForgetPassword.styled';
//axios.defaults.baseURL = 'https://water-p2oh.onrender.com/api';

export const ForgetPassword = () => {
  const [email, setEmail] = useState(null);

  const handlEmail = event => {
    setEmail(event.target.value);
  };

  const submit = async event => {
    event.preventDefault();
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

  return (
    <Wrap>
      <Form onSubmit={submit}>
        <Label>
          Enter your email
          <Input onChange={handlEmail} type="email" placeholder="Email" />
        </Label>
        <Button type="submit">
          Send
          {/* <StyledLink to="/">Send</StyledLink> */}
        </Button>
      </Form>
    </Wrap>
  );
};
