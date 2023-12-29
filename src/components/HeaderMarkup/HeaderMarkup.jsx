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
//import { useSelector } from 'react-redux';

const HeaderMarkup = ({ toggleSetting, toggleLogOut }) => {
  const { isLoggedIn } = useAuth();
  const { userIcon } = useAuth();
  // const { user } = useAuth();
  //const loading = useSelector(state => state.auth.isLoading);
  const { isLoading } = useAuth();

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

            <li style={{ width: '118px' }}>
              {isLoggedIn ? (
                <RightNavWrapper>
                  <StyledLink to="/">
                    <h3>Hi, user</h3>
                    <RealUserIcon src={userIcon} alt="user real avatar" />
                    <ArrowIcon />
                  </StyledLink>
                  <NavMenu className="navMenu">
                    <NavLi>
                      <SettingsIcon />
                      <a
                        href="#settings"
                        style={{ color: '#407bff' }}
                        onClick={() => toggleSetting()}
                      >
                        Settings
                      </a>
                    </NavLi>
                    <NavLi>
                      <LogOutIcon />
                      <a
                        href="#logout"
                        style={{ color: '#407bff' }}
                        onClick={() => toggleLogOut()}
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
