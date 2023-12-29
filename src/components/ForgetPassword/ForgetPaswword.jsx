import { useState } from 'react';
import axios from 'axios';
import { checkUser } from 'Helpers/ForgotPassFetch';
import {
  Wrap,
  Label,
  Input,
  Button,
  Form,
  // StyledLink,
} from './ForgetPassword.styled';

export const ForgetPassword = () => {
  const [email, setEmail] = useState(null);

  const handlEmail = event => {
    setEmail(event.target.value);
  };

  const submit = async event => {
    event.preventDefault();
    checkUser(email);
    setEmail(null);
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
