import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  color: ${props => props.theme.primaryBlue};
  display: flex;
  align-items: center;

  &:hover,
  :focus {
    color: ${props => props.theme.secondaryOrange};
  }
`;

export const Wrap = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 240px;

  @media (min-width: 768px) {
    width: 336px;
    flex-direction: row;
    justify-content: flex-start;
  }
  @media (min-width: 1440px) {
    width: 384px;

    margin-bottom: 310px;
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Label = styled.label`
  width: 280px;
  display: flex;
  gap: 8px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  color: ${props => props.theme.primaryBlack};
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  @media (min-width: 768px) {
    width: 336px;
  }
  @media (min-width: 1440px) {
    width: 384px;
  }
`;
export const Input = styled.input`
  width: 100%;
  color: ${props => props.theme.secondaryBlue};
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  padding: 12px 10px;
  border-radius: 6px;
  border: 1px solid ${props => props.theme.secondaryLightBlue};
  background: ${props => props.theme.primaryWhite};
  margin-bottom: 16px;

  &:focus {
    color: ${props => props.theme.primaryBlue};
  }
  &::placeholder {
    color: ${props => props.theme.secondaryBlue};
    opacity: 1;
  }
  &:invalid {
    border: 1px solid ${props => props.theme.secondaryRed};
  }
`;
export const Button = styled.button`
  margin-right: auto;
  margin-left: auto;
  width: 100%;
  display: flex;
  padding: 8px 30px;
  justify-content: center;
  align-items: center;
  align-self: center;
  border-radius: 10px;
  background-color: ${props => props.theme.primaryBlue};
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  color: ${props => props.theme.primaryWhite};
  text-align: center;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  margin-bottom: 16px;
  &:hover {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  }

  &:focus {
    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0);
  }
`;
