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
import { useDispatch, useSelector } from 'react-redux';
import { selectWaterItems } from 'components/redux/water/selectors';
import {
  addWater,
  deleteWater,
  findWaterToday,
} from 'components/redux/water/operations';

const Today = () => {
  const dispatch = useDispatch();
  const todayInfo = useSelector(selectWaterItems);
  const listRef = useRef(null);

  // useEffect(() => {
  //   dispatch(findWaterToday());
  // }, [dispatch]);

  // function onAddWater(amount) {
  //   dispatch(addWater(data));
  // }

  // function onEdite({ id, time, amout }) {
  // {date: "1, January", norma: "2.0 L", procent: "0%", servings: 0}
  // }

  // function onDelete(id) {
  //   dispatch(deleteWater(id));
  // }

  return (
    <Container>
      <h2>Today</h2>
      <Viewport ref={listRef}>
        <TableStyled>
          <tbody>
            {todayInfo.map(data => (
              <TableRow key={data._id} idWater={data._id}>
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
