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

export const Layout = () => {
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
      </main>
    </>
  );
};