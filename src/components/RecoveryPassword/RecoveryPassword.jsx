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
  const [email, setEmail] = useState();

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

  const handlEmail = event => {
    // setEmail(event.target.value);
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
          ENTER YOUR EMAIL
          <Input
            onChange={handlEmail}
            type="email"
            placeholder="Email"
            avtocomplite="off"
          />
        </Label>
        <Label>
          ENTER NEW PASSWORD
          <Input onChange={handlEmail} type={type} placeholder="New Password" />
        </Label>
        <span onClick={handleToggle}>{icon}</span>
        <Label>
          REPEAT NEW PASSWORD
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
