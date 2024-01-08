import { useEffect, useRef } from 'react';

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

import css from './Today.module.css';
import Icons from '../../../../../icons/HomePage/sprite.svg';
import { useDispatch, useSelector } from 'react-redux';
import { findWaterToday } from 'components/redux/water/operations';
import { selectWaterNotes } from 'components/redux/water/selectors';

const Today = ({ onDeleteWater, onAddWater, onEditingWater }) => {
  const dispatch = useDispatch();
  const notes = useSelector(selectWaterNotes);
  const listRef = useRef(null);
  useEffect(() => {
    dispatch(findWaterToday());
  }, [dispatch]);

  return (
    <Container>
      <h2>Today</h2>
      <Viewport ref={listRef}>
        <TableStyled>
          <tbody>
            {notes &&
              notes.map(data => (
                <TableRow key={data._id}>
                  <TableCell>
                    <ImgCont>
                      <svg className={css.cup} width="26" height="26">
                        <use href={Icons + '#cup'}></use>
                      </svg>
                    </ImgCont>
                  </TableCell>
                  <TextCell>{data.amount} ml</TextCell>
                  <TimeCell>{data.time}</TimeCell>
                  <TableCell>
                    <Button
                      aria-label="Edit notice"
                      type="button"
                      onClick={() => {
                        onEditingWater(data._id);
                      }}
                    >
                      <svg className={css.icon_pencil} width="16" height="16">
                        <use href={Icons + '#pencil-square'}></use>
                      </svg>
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button
                      aria-label="Delete notice"
                      type="button"
                      onClick={() => {
                        onDeleteWater(data._id);
                      }}
                    >
                      <svg className={css.icon_trash} width="16" height="16">
                        <use href={Icons + '#trash'}></use>
                      </svg>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </tbody>
        </TableStyled>
        <AddButton
          type="button"
          onClick={() => {
            onAddWater();
          }}
        >
          + Add water
        </AddButton>
      </Viewport>
    </Container>
  );
};

export default Today;
