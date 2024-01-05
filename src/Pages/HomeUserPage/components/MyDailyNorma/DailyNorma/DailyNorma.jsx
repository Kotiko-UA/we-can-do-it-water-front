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
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { DailyNormaModal } from 'components/DailyNormaModal/DailyNormaModal.jsx';
import { Modalochka } from 'components/Modal/Modal';
import { selectWaterItems } from 'components/redux/water/selectors';
import { AddWater } from 'components/AddWater/addWater';
import { selectDailyNorma } from 'components/redux/auth/selectors';

export const DailyNorma = () => {
  const { norma, procent } = useSelector(selectWaterItems);
  const dailyNormaValue = useSelector(selectDailyNorma);
  const [dailyNormaModal, setDailyNormaModal] = useState(false);
  const [addWaterModal, setaddWaterModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen(prevstate => !prevstate);
  };

  function onClickDailyNorma() {
    setaddWaterModal(true);
    setDailyNormaModal(false);
    toggleModal();
  }
  function onClickAddWater() {
    setaddWaterModal(false);
    setDailyNormaModal(true);
    toggleModal();
  }
  const close = () => {
    setIsOpen(false);
  };

  return (
    <Container>
      <DailyNormaContainer>
        <Title>My daily norma</Title>
        <NormaContainer>
          <Norma>{dailyNormaValue} L</Norma>
          <NormaBtn onClick={onClickDailyNorma}>Edit</NormaBtn>
        </NormaContainer>
      </DailyNormaContainer>

      {isOpen && (
        <Modalochka toggleModal={toggleModal}>
          {dailyNormaModal && <AddWater close={close} />}
          {addWaterModal && (
            <DailyNormaModal close={close} closeModal={toggleModal} />
          )}
        </Modalochka>
      )}

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
          <WaterMeter $filled={procent}>
            <div />
          </WaterMeter>
          <WaterInfo>
            <span>0%</span>
            <span>50%</span>
            <span>100%</span>
          </WaterInfo>
        </WaterStatus>
        <Button type="button" onClick={onClickAddWater}>
          <svg>
            <use href={sprite + '#plus-circle'} />
          </svg>
          Add water
        </Button>
        {isOpen && <AddWater />}
      </StatusContainer>
    </Container>
  );
};
