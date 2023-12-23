import { Outlet } from 'react-router-dom';
// import { Suspense } from 'react';
import {
  LogoSvg,
  UserAvatar,
  Nav,
  StyledLinkLogo,
  StyledLink,
} from './Layout.styled.js';

export const Layout = () => {
  return (
    <div>
      <header>
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
      </header>
      <Outlet />
      {/* <Suspense> */}

      {/* </Suspense> */}
      <main></main>
    </div>
  );
};
