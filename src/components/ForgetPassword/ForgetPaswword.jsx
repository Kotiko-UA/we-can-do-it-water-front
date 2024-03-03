import { useState } from 'react';

import { checkUser } from 'Helpers/ForgotPassFetch';
import {
  Wrap,
  Label,
  Input,
  Button,
  Form,
  StyledLink,
} from './ForgetPassword.styled';
import { useNavigate } from 'react-router-dom';

export const ForgetPassword = () => {
  const [email, setEmail] = useState(' ');
  const navigate = useNavigate();

  const handlEmail = event => {
    setEmail(event.target.value);
  };

  const submit = async event => {
    event.preventDefault();
    checkUser(email);
    setEmail('');
    navigate('/signin', { replace: true });
  };

  return (
    <Wrap>
      <Form onSubmit={submit}>
        <Label>
          Enter your email
          <Input
            onChange={handlEmail}
            type="email"
            placeholder="Email"
            value={email}
            pattern="/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/"
          />
        </Label>
        <Button type="submit">Send</Button>

        <StyledLink to="/signIn">Sign in</StyledLink>
      </Form>
    </Wrap>
  );
};
