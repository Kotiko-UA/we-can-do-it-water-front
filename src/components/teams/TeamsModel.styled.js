import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  opacity: 1;
  background-color: rgba(0, 0, 0, 0.8);
`;
export const Modal = styled.div`
  position: absolute;
  padding: 8px;
  width: 280px;
  height: 560px;
  top: 50%;
  left: 50%;
  overflow-y: auto;
  transform: translate(-50%, -50%) scale(1);
  background-color: #fff;
  @media screen and (min-width: 768px) {
    width: 600px;
  }
  @media screen and (min-width: 1440px) {
    width: 850px;
    height: 700px;
  }
`;
export const ButtonClose = styled.button`
  display: block;
  text-align: center;
  background-color: transparent;
  color: #407bff;
  margin-left: auto;
  border: 2px solid #407bff;
  border-radius: 50%;
  width: 24px;
  height: 24px;
`;
export const TeamList = styled.ul`
  display: flex;
  flex-wrap: 'nowrap';
  flex-direction: column;
  gap: 12px;
  @media screen and (min-width: 768px) {
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  @media screen and (min-width: 1440px) {
  }
`;
export const TeamCart = styled.li`
  display: block;
  scale: 1;
  transition: scale 100ms linear;
  &:hover,
  &:focus {
    scale: 1.05;
  }
`;
export const TeamLink = styled.a`
  padding: 4px;
  display: block;
  width: 100%;
  height: 100%;
  display: block;
`;
export const TeamPhoto = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 150px;
  height: 150px;
  margin-bottom: 8px;
`;
export const TeamName = styled.p`
  display: block;
  color: #407bff;
  text-align: center;
  font-family: 'Roboto';
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  margin-bottom: 8px;
`;
export const TeamRole = styled.p`
  display: block;
  color: #407bff;
  text-align: center;
  font-family: 'Roboto';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
`;
