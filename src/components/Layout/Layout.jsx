import { Outlet } from 'react-router-dom';

// import { Suspense } from 'react';
import {
  Header,
  LogoSvg,
  UserAvatar,
  Nav,
  StyledLinkLogo,
  StyledLink,
  Container,
} from './Layout.styled.js';
import { useState } from 'react';
import { Paskal } from 'components/pascal/paskal.jsx';
import { TeamModal } from 'components/teams/TeamModal.jsx';

export const Layout = () => {
  const [modal, setModal] = useState(false);
  const onClick = () => {
    setModal(!modal);
  };
  return (
    <>
      <Header>
        <Container>
          <Nav>
            <li>
              <StyledLinkLogo to="/">
                <LogoSvg alt="logo" />
                Tracker <br /> of water
              </StyledLinkLogo>
            </li>
            <li>
              <StyledLink to="/signup">
                Sign in
                <UserAvatar alt="user avatar" />
              </StyledLink>
            </li>
          </Nav>
        </Container>
      </Header>
      <main>
        <Outlet />
        {/* <Suspense> */}

        {/* </Suspense> */}
        {modal && <TeamModal onClick={onClick} />}
        <Paskal onClick={onClick} />
      </main>
    </>
  );
};
