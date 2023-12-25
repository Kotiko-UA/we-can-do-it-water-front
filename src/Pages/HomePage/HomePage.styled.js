import styled from 'styled-components';

import bcgMobile from '../../icons/Background_element_Home_screen.svg';

export const Wrapper = styled.div`
  width: 320px;
  padding-left: 20px;
  padding-right: 20px;
  background-image: url(${bcgMobile});
  background-size: cover;
  outline: 1px solid tomato;

  @media screen and (min-width: 768px) {
  }
`;
