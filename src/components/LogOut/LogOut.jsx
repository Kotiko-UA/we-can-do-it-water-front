import { useDispatch } from 'react-redux';

import {
  CancelButton,
  Container,
  LogOutButton,
  SecondaryText,
  MediaButtonsContainer,
} from './LogOut.styled';
import { logOut } from 'components/redux/auth/operations';

export const LogOut = ({ close }) => {
  const dispatch = useDispatch();

  return (
    <Container>
      <SecondaryText>Do you really want to leave?</SecondaryText>
      <MediaButtonsContainer>
        <LogOutButton
          type="submit"
          onClick={() => {
            dispatch(logOut());
            close();
          }}
        >
          Log out
        </LogOutButton>
        <CancelButton onClick={close}>Cancel</CancelButton>
      </MediaButtonsContainer>
    </Container>
  );
};
