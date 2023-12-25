import { CatWrap, PascalCat, PaskalWrap } from './paskal.styled';
import useSound from 'use-sound';
import meow from './sound/meow.mp3';
export const Paskal = ({ onClick }) => {
  const [play] = useSound(meow, { volume: 0.2 });
  return (
    <PaskalWrap>
      <CatWrap onMouseEnter={play} onClick={onClick}>
        <PascalCat />
      </CatWrap>
    </PaskalWrap>
  );
};
