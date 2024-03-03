import { useState } from 'react';

import {
  Wrap,
  Label,
  Input,
  Button,
  Form,
  StyledLink,
  EyeActive,
  EyeSlash,
} from './RecoveryPassword.styled';

export const RecoveryPassword = () => {
  const [type, setType] = useState('password');
  const [icon, setIcon] = useState(
    <EyeSlash alt="eye_slash">EyeSlash</EyeSlash>
  );

  const handleToggle = () => {
    if (type === 'password') {
      setIcon(<EyeActive alt="eye_active">EyeActive</EyeActive>);
      setType('text');
    } else {
      setIcon(<EyeSlash alt="eye_slash">EyeSlash</EyeSlash>);
      setType('password');
    }
  };

  const handlEmail = event => {};

  const submit = event => {
    event.preventDefault();
    const form = event.currentTarget;

    form.reset();
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
            avtocomplite="off"
          />
        </Label>
        <Label>
          Enter new password
          <Input onChange={handlEmail} type={type} placeholder="New Password" />
        </Label>
        <span onClick={handleToggle}>{icon}</span>
        <Label>
          Rereat new password
          <Input
            onChange={handlEmail}
            type={type}
            placeholder=" Repeat New Password"
          />
        </Label>
        <span onClick={handleToggle}>{icon}</span>
        <Button type="button">
          <StyledLink to="/signIn">Send</StyledLink>
        </Button>
      </Form>
    </Wrap>
  );
};
