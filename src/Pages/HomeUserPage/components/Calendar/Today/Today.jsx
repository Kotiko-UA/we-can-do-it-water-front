import { useContext, useEffect, useRef } from 'react';

import {
  Viewport,
  TableStyled,
  TableRow,
  TableCell,
  TextCell,
  TimeCell,
  Button,
  Container,
  AddButton,
  ImgCont,
} from './Today.styled';

import { ModalContext } from 'components/helpers/ModalContext';

import css from './Today.module.css';
import Icons from '../../../../../icons/HomePage/sprite.svg';
import { DayInfo } from 'FetchExamples/DayInfo';

const Today = () => {
  const toggleModal = useContext(ModalContext);

  const listRef = useRef(null);

  return (
    <Container>
      <h2>Today</h2>
      <Viewport ref={listRef}>
        <TableStyled>
          <tbody>
            {DayInfo.map(data => (
              <TableRow key={data._id}>
                <TableCell>
                  <ImgCont>
                    <svg className={css.cup} width="26" height="26">
                      <use href={Icons + '#cup'}></use>
                    </svg>
                  </ImgCont>
                </TableCell>
                <TextCell>{data.amount} ml</TextCell>
                <TimeCell>
                  {new Intl.DateTimeFormat('en', {
                    hour: 'numeric',
                    minute: 'numeric',
                    hour12: true,
                  }).format(new Date(data.updatedAt))}
                </TimeCell>
                <TableCell>
                  <Button aria-label="Edit notice">
                    <svg className={css.icon_pencil} width="16" height="16">
                      <use href={Icons + '#pencil-square'}></use>
                    </svg>
                  </Button>
                </TableCell>
                <TableCell>
                  <Button aria-label="Delete notice">
                    <svg className={css.icon_trash} width="16" height="16">
                      <use href={Icons + '#trash'}></use>
                    </svg>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </tbody>
        </TableStyled>
        <AddButton type="submit">+ Add water</AddButton>
      </Viewport>
    </Container>
  );
};

export default Today;
