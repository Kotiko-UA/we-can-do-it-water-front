import styled from 'styled-components';

import logoImg from '../../icons/glass_icon.svg';
import editImg from '../../icons/edit_icon.svg';
import delImg from '../../icons/delete_icon.svg';

export const Wrapper = styled.div`
  width: 100%;
  /* height: 220px; */
  padding: 24px 8px 0px;

  outline: 1px solid tomato;
`;

export const Title = styled.h3`
  width: 72px;
  height: 30px;
  margin-bottom: 16px;
  color: var(--Primery-Color-Black, #2f2f2f);
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px; /* 125% */
  outline: 1px solid tomato;
`;

export const List = styled.ul`
  width: 100%;
  height: 220px;
  overflow-y: scroll;

  outline: 1px solid tomato;
`;

export const ListItem = styled.li`
  width: 100%;
  display: flex;
  outline: 1px solid tomato;
`;

export const WrapperOfDate = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
  margin-right: 38px;
  outline: 1px solid tomato;
`;

export const LogoGlass = styled.div`
  width: 26px;
  height: 26px;
  /* margin-right: 12px; */
  background-image: url(${logoImg});
  background-size: cover;
  outline: 1px solid tomato;
`;

export const Time = styled.span`
  width: 56px;
  color: var(--Primery-Color-Black, #2f2f2f);
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 200% */
  outline: 1px solid tomato;
`;

export const Quantity = styled.span`
  width: 60px;
  color: var(--Primery-Color-Blue, #407bff);
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  outline: 1px solid tomato;
`;
export const WrapperOfBtn = styled.div`
  width: 100%;
  display: flex;
  gap: 18px;
  outline: 1px solid tomato;
`;

export const ButtonEdit = styled.button`
  width: 16px;
  height: 16px;
  outline: 1px solid tomato;
`;
export const ButtonDel = styled.button`
  width: 16px;
  height: 16px;
  outline: 1px solid tomato;
`;
export const EditImg = styled.div`
  /* width: 16px;
  height: 16px; */
  width: 100%;
  height: 100%;
  /* margin-right: 12px; */
  background-image: url(${editImg});
  background-size: cover;
  outline: 1px solid tomato;
`;
export const DelImg = styled.div`
  width: 100%;
  height: 100%;
  /* margin-right: 12px; */
  background-image: url(${delImg});
  background-size: cover;
  outline: 1px solid tomato;
`;
