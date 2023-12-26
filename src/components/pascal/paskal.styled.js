import styled from 'styled-components';
import { ReactComponent as LetterCat } from '../../icons/pascalian-cat.svg';
export const PaskalWrap = styled.div`
  position: fixed;
  bottom: 10px;
  right: 4px;
  overflow: hidden;
`;
export const CatWrap = styled.div`
  cursor: pointer;
  transform: translateY(64%);
  transition: transform 100ms linear;
  &:hover,
  &:focus {
    transform: translateY(0%);
  }
`;
export const PascalCat = styled(LetterCat)`
  display: block;
  width: 100%;
  height: 100%;
`;
