// import { useContext } from 'react';
import {
  DailyNormaContainer,
  Container,
  Norma,
  NormaBtn,
  NormaContainer,
  Title,
  StatusContainer,
  WaterStatus,
  WaterMeter,
  WaterInfo,
  Button,
} from './DailyNorma.styled';

// import { AddButton } from '../../../MainStyle/Buttons/AddButton.styled';
// import { ModalContext } from 'components/helpers/ModalContext';
// import DailyNormaModal from 'components/test/Modals/DailyNorma/DailyNorma';

import imgDesk from '../../../../../icons/HomePage/main/bottle-desk-1x.webp';
import imgDesk2x from '../../../../../icons/HomePage/main/bottle-desk-2x.webp';
import imgTablet from '../../../../../icons/HomePage/main/bottle-tab-1x.webp';
import imgTablet2x from '../../../../../icons/HomePage/main/bottle-tab-2x.webp';
import imgMob from '../../../../../icons/HomePage/main/bottle-mob-1x.webp';
import imgMob2x from '../../../../../icons/HomePage/main/bottle-mob-2x.webp';
import imgDeskPng from '../../../../../icons/HomePage/main/bottle-desk-1x.png';
import imgDeskPng2x from '../../../../../icons/HomePage/main/bottle-desk-2x.png';
import imgTabletPng from '../../../../../icons/HomePage/main/bottle-tab-1x.png';
import imgTabletPng2x from '../../../../../icons/HomePage/main/bottle-tab-2x.png';
import imgMobPng from '../../../../../icons/HomePage/main/bottle-mob-1x.png';
import imgMobPng2x from '../../../../../icons/HomePage/main/bottle-mob-2x.png';

import sprite from '../../../../../icons/HomePage/sprite.svg';

export const DailyNorma = () => {
  return (
    <Container>
      <DailyNormaContainer>
        <Title>My daily norma</Title>
        <NormaContainer>
          <Norma>1,5 L</Norma>
          <NormaBtn>Edit</NormaBtn>
        </NormaContainer>
      </DailyNormaContainer>
      <picture>
        <source
          media="(min-width: 1440px)"
          srcSet={`${imgDesk} 1x, ${imgDesk2x} 2x`}
          type="image/webp"
        />
        <source
          media="(min-width: 1440px)"
          srcSet={`${imgDeskPng} 1x, ${imgDeskPng2x} 2x`}
          type="image/png"
        />
        <source
          media="(min-width: 768px)"
          srcSet={`${imgTablet} 1x, ${imgTablet2x} 2x`}
          type="image/webp"
        />
        <source
          media="(min-width: 768px)"
          srcSet={`${imgTabletPng} 1x, ${imgTabletPng2x} 2x`}
          type="image/png"
        />
        <source
          media="(max-width: 767px)"
          srcSet={`${imgMob} 1x, ${imgMob2x} 2x`}
          type="image/webp"
        />
        <source
          media="(max-width: 767px)"
          srcSet={`${imgMobPng} 1x, ${imgMobPng2x} 2x`}
          type="image/png"
        />
        <img src={imgDeskPng} alt="Bottle" />
      </picture>
      <StatusContainer>
        <WaterStatus>
          <p>Today</p>
          <WaterMeter $filled={40}>
            <div />
          </WaterMeter>
          <WaterInfo>
            <span>0%</span>
            <span>50%</span>
            <span>100%</span>
          </WaterInfo>
        </WaterStatus>
        <Button>
          <svg>
            <use href={sprite + '#plus-circle'} />
          </svg>
          Add water
        </Button>
      </StatusContainer>
    </Container>
  );
};