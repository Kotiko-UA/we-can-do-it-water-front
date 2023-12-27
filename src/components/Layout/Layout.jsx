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
  LeftNavWrapper,
  NavMenu,
  SettingsIcon,
  LogOutIcon,
  NavLi
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

            <li style={{width:"118px"}}>
              <LeftNavWrapper>
                <StyledLink to="/signup" style={{justifyContent: "flex-end"}}>
                  Sign in
                  <UserAvatar alt="user avatar" />
                </StyledLink>

                <NavMenu className="navMenu">
                  <NavLi>
                    <SettingsIcon/>
                    <a href="/settings" style={{color: "#407bff"}}>Settings</a>
                  </NavLi>
                  <NavLi>
                    <LogOutIcon/>
                    <a href="/logout" style={{color: "#407bff"}}>Log out</a>
                  </NavLi>
                </NavMenu>

              </LeftNavWrapper>
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
