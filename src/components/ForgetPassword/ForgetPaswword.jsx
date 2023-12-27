import { useState } from 'react';

import {
  Wrap,
  Label,
  Input,
  Button,
  Form,
  StyledLink,
} from './ForgetPassword.styled';

export const ForgetPassword = () => {
  const [email, setEmail] = useState();

  const handlEmail = event => {
    setEmail(event.target.value);
  };

  const submit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const { email } = form.elements;
    // dispatch(
    //   register({
    //     email: email.value,
    //   })
    // );
    form.reset();
  };
  return (
    <Wrap>
      <Form onSubmit={submit}>
        <Label>
          Enter your email
          <Input onChange={handlEmail} type="email" placeholder="Email" />
        </Label>
        <Button type="button">
          <StyledLink to="/">Send</StyledLink>
        </Button>
      </Form>
    </Wrap>
  );
};
