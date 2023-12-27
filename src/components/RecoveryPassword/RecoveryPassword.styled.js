import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ReactComponent as EyeActiveSvg } from '../../icons/eye_active.svg';
import { ReactComponent as EyeSlashSvg } from '../../icons/eye_slash.svg';

export const StyledLink = styled(NavLink)`
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  color: #ffffff;
  &:hover,
  :focus {
    color: var(--Secondary-color-5, #ff9d43);
  }
`;

export const Wrap = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    width: 336px;

    flex-direction: row;
    justify-content: flex-start;
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
  color: #2f2f2f;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 8px;
  @media (min-width: 768px) {
    width: 336px;
  }
`;
export const Input = styled.input`
  width: 100%;
  color: #9ebbff;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  padding: 12px 10px;
  border-radius: 6px;
  border: 1px solid #d7e3ff;
  background: #fff;
  margin-bottom: 20px;

  &:focus {
    color: #407bff;
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
  background-color: var(--Primery-Color-Blue, #407bff);
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  color: #ffffff;
  text-align: center;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;
export const EyeSlash = styled(EyeSlashSvg)`
  width: 16px;
  height: 16px;
  position: relative;
  bottom: 60px;
  left: 250px;
  vertical-align: middle;
  cursor: pointer;
  @media (min-width: 768px) {
    left: 300px;
  }
`;

export const EyeActive = styled(EyeActiveSvg)`
  width: 16px;
  height: 16px;
  position: relative;
  bottom: 60px;
  left: 185px;
  vertical-align: middle;
  cursor: pointer;
`;
