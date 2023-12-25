import { CatWrap, PascalCat, PaskalWrap } from './paskal.styled';
import useSound from 'use-sound';
import meow from './sound/meow.mp3';
import { useState } from 'react';
export const Paskal = () => {
  const [play] = useSound(meow, { volume: 0.2 });
  const [modal, setModal] = useState(false);
  return (
    <PaskalWrap>
      <CatWrap onMouseEnter={play}>
        <PascalCat />
      </CatWrap>
    </PaskalWrap>
  );
};
