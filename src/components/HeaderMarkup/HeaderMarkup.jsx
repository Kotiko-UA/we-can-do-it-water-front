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

const HeaderMarkup = ({ onClickSetting, onClickLogout }) => {
  const { isLoggedIn } = useAuth();
  const { userIcon } = useAuth();
  const { isLoading } = useAuth();
  const { user } = useAuth();

  let userNameFromEmail = null;
  const userEmail = user.email;
  if (userEmail !== null) {
    const index = userEmail.indexOf('@');
    userNameFromEmail = userEmail.slice(0, index);
  }

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

            <li>
              {isLoggedIn ? (
                <RightNavWrapper>
                  <StyledLink to="/">
                    <h3>{userNameFromEmail}</h3>
                    <RealUserIcon src={userIcon} alt="user real avatar" />
                    <ArrowIcon />
                  </StyledLink>

                  <NavMenu className="navMenu">
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
