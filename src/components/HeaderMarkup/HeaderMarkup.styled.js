import styled from 'styled-components';
import { ReactComponent as Logo } from '../../icons/logo.svg';
import { ReactComponent as Avatar } from '../../icons/user.svg';
import { ReactComponent as LogOut } from '../../icons/logout.svg';
import { ReactComponent as Settings } from '../../icons/settings.svg';
import { ReactComponent as Arrow } from '../../icons/arrow.svg';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
 
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    /* width: 704px; */
    /* padding-left: 32px;
    padding-right: 32px; */
  }

  @media (min-width: 1440px) {
    /* width: 1216px; */
    padding-left: 112px;
    padding-right: 112px;
  }
`;

export const StyledLinkLogo = styled(NavLink)`
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  color: #407bff;
  color: ${props => props.theme.primaryBlue};

  display: flex;
  align-items: center;
  gap: 4px;
  justify-content: flex-end;

  &:hover {
    color: ${props => props.theme.secondaryOrange};
  }
`;

export const LogoSvg = styled(Logo)`
  width: 40px;
  height: 48px;
  margin-left: auto;
  margin-right: auto;
`;

export const Nav = styled.nav`
 width: 280px;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;


  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (min-width: 768px) {
    width: 704px;

  }

  @media (min-width: 1440px) {
    width: 1216px;
  }

`;

export const RightNavWrapper = styled.div`
  justify-content: right;
  position: relative;
  &:hover .navMenu {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }

  /* &:active .open {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  } */
`;
export const StyledLink = styled(NavLink)`
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  color: ${props => props.theme.primaryBlue};

  display: flex;
  align-items: center;
  gap: 8px;
  &:hover {
    color: ${props => props.theme.secondaryOrange};
  }
`;

export const RealUserIcon = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 28px;
`;

export const ArrowIcon = styled(Arrow)`
  width: 16px;
  height: 16px;
  margin-left: 4px;
`;

export const UserAvatar = styled(Avatar)`
  width: 28px;
  height: 28px;
`;

export const NavMenu = styled.ul`
  display: inline-flex;
  padding: 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  width: 118px;
  right: 0;

  border-radius: 10px;
  background: ${props => props.theme.primaryWhite};
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.2);

  color: ${props => props.theme.primaryBlue};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;

  position: absolute;
  z-index: 1;
  opacity: 0;
  transform: translateY(-10px);
  visibility: hidden;
  transition: 0.5s;

  &:active .open {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }
`;
export const NavLi = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const SettingsIcon = styled(Settings)``;

export const LogOutIcon = styled(LogOut)``;
