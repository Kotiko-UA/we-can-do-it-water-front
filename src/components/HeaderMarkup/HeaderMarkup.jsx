import { useAuth } from 'Hooks/useAuth.js';
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
} from './HeaderMarkup.styled.js';
import { Loader } from '../Loader.jsx';
// import { useState } from 'react';

const HeaderMarkup = ({ onClickSetting, onClickLogout }) => {
  const { isLoggedIn } = useAuth();
  const { userIcon } = useAuth();
  const { isLoading } = useAuth();
  const { user } = useAuth();
  // const [isOpen, setOpen] = useState(false);

  let userNameFromEmail = null;
  const userEmail = user.email;
  if (userEmail !== null) {
    const index = userEmail.indexOf('@');
    userNameFromEmail = userEmail.slice(0, index);
  }

  // console.log('user', user);
  // console.log('emailNаme not in if', userNameFromEmail);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Container>
          <Nav>
            <li>
              <StyledLinkLogo to="/">
                <LogoSvg alt="logo" />
                Tracker <br /> of water
              </StyledLinkLogo>
            </li>

            <li
            // style={{ width: '118px' }}
            >
              {isLoggedIn ? (
                <RightNavWrapper
                // onClick={() => {
                //   console.log('ckick');
                //   setOpen(!isOpen);
                // }}
                >
                  <StyledLink to="/">
                    <h3>{userNameFromEmail}</h3>
                    <RealUserIcon src={userIcon} alt="user real avatar" />
                    <ArrowIcon />
                  </StyledLink>

                  <NavMenu
                    className="navMenu"
                    // {`${isOpen ? 'open' : ''}`}
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
      )}
    </>
  );
};

export default HeaderMarkup;
