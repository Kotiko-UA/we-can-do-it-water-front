import styled from 'styled-components';
import { ReactComponent as Logo } from '../../icons/logo.svg';
import { ReactComponent as Avatar } from '../../icons/user.svg';
import { NavLink } from 'react-router-dom';

export const LogoSvg = styled(Logo)`
  width: 40px;
  height: 45px;
  margin-left: auto;
  margin-right: auto;
`;

export const UserAvatar = styled(Avatar)`
  width: 28px;
  height: 28px;
  margin-left: auto;
  margin-right: auto;
`;

export const Nav = styled.nav`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-left: 22px;
  padding-right: 22px;
  padding-top: 8px;

  @media (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
    padding-top: 16px;
  }

  @media (min-width: 768px) {
    padding-left: 112px;
    padding-right: 112px;
    padding-top: 12px;
    padding: 12px, 112px 0;
  }
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
