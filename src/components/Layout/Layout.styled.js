import styled from 'styled-components';
import { ReactComponent as Logo } from '../../icons/logo.svg';
import { ReactComponent as Avatar } from '../../icons/user.svg';
import { ReactComponent as LogOut } from '../../icons/logout.svg';
import { ReactComponent as Settings } from '../../icons/settings.svg';
import { NavLink } from 'react-router-dom';

export const LeftNavWrapper = styled.div`
  justify-content: right;
  &:hover .navMenu {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }
`;

export const NavMenu = styled.ul`
  display: inline-flex;
  padding: 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  width: 118px;

  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.2);

  color: #407bff;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;

  position: absolute;
  z-index: 1;
  opacity: 0;
  transform: translateY(-10px);
  visibility: hidden;
  transition: 0.3s;
`;

export const NavLi = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const Header = styled.header`
  padding-top: 8px;
  @media (min-width: 768px) {
    padding-top: 16px;
  }

  @media (min-width: 1440px) {
    padding-top: 12px;
  }
`;

export const Container = styled.div`
  /* margin-top: 24px; */

  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
  }

  @media (min-width: 1440px) {
    padding-left: 112px;
    padding-right: 112px;
  }
`;

export const LogoSvg = styled(Logo)`
  width: 40px;
  height: 48px;
  margin-left: auto;
  margin-right: auto;
`;

export const UserAvatar = styled(Avatar)`
  width: 28px;
  height: 28px;
`;

export const LogOutIcon = styled(LogOut)``;
export const SettingsIcon = styled(Settings)``;

export const Nav = styled.nav`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledLinkLogo = styled(NavLink)`
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  color: #407bff;

  display: flex;
  align-items: center;
  gap: 4px;
`;

export const StyledLink = styled(NavLink)`
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  color: #407bff;

  display: flex;
  align-items: center;
  gap: 8px;
`;
