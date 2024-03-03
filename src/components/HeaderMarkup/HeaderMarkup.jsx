import { useAuth } from 'Hooks/useAuth.js';
import { useState, useRef } from 'react';
import {
  Container,
  StyledLinkLogo,
  LogoSvg,
  Nav,
  RightNavWrapper,
  StyledLink,
  RealUserIcon,
  UserAvatar,
  NavMenu,
  NavLi,
  SettingsIcon,
  LogOutIcon,
  ArrowIcon,
  Button,
} from './HeaderMarkup.styled.js';
import { useOutSide } from '../../Hooks/outSide.js';

const HeaderMarkup = ({ onClickSetting, onClickLogout }) => {
  const { isLoggedIn } = useAuth();
  const { userIcon } = useAuth();
  const { user } = useAuth();
  const [isActive, setisActive] = useState(false);
  const menuRef = useRef(null);
  useOutSide(menuRef, () => {
    setisActive(false);
  });

  let userNameFromEmail = null;
  const userEmail = user.email;
  if (userEmail !== null) {
    const index = userEmail.indexOf('@');
    userNameFromEmail = userEmail.slice(0, index);
  }
  const userName = user.name;
  const userDefaultName = userName.includes('User_');

  return (
    <Container>
      <Nav>
        <li>
          <StyledLinkLogo to="/">
            <LogoSvg alt="logo" />
            Tracker <br /> of water
          </StyledLinkLogo>
        </li>

        <li>
          {isLoggedIn ? (
            <RightNavWrapper ref={menuRef}>
 <Button type="button" onClick={() => setisActive(!isActive)}>
                <StyledLink to="/">
  <h3>{userDefaultName ? userNameFromEmail : userName}</h3>
                  <RealUserIcon src={userIcon} alt="user real avatar" />
                  <ArrowIcon />
                </StyledLink>
              </Button>


              <NavMenu
                className={`navMenu ${isActive ? 'open' : ' '}`}
                ref={menuRef}
              >
                <NavLi>
                  <SettingsIcon />
                  <a
                    href="#settings"
                    style={{ color: '#407bff' }}
                    onClick={onClickSetting}
                  >
                    Settings
                  </a>
                </NavLi>
                <NavLi>
                  <LogOutIcon />
                  <a
                    href="#logout"
                    style={{ color: '#407bff' }}
                    onClick={onClickLogout}
                  >
                    Log out
                  </a>
                </NavLi>
              </NavMenu>
            </RightNavWrapper>
          ) : (
            <StyledLink to="/signin">
              Sign in
              <UserAvatar alt="user default avatar" />
            </StyledLink>
          )}
        </li>
      </Nav>
    </Container>
  );
};

export default HeaderMarkup;
