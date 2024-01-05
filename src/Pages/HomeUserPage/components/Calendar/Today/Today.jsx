import { useEffect, useRef, useState } from 'react';

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

import { AddWater } from 'components/AddWater/addWater';
import { EditingWater } from 'components/EditingWater/EditingWater';
import { DeleteWater } from 'components/DeleteWater/DeleteWater';

import css from './Today.module.css';
import Icons from '../../../../../icons/HomePage/sprite.svg';
import { useDispatch, useSelector } from 'react-redux';
import { selectWaterItems } from 'components/redux/water/selectors';
import { findWaterToday } from 'components/redux/water/operations';

const Today = () => {
  const dispatch = useDispatch();
  const { notes = [] } = useSelector(selectWaterItems);
  const [isOpenAddModal, setIsOpenAddModal] = useState(false);
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [isId, setIsId] = useState();
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
            {notes.map(data => (
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
                      setIsId(data._id);
                      setIsOpenEditModal(!isOpenEditModal);
                    }}
                  >
                    <svg className={css.icon_pencil} width="16" height="16">
                      <use href={Icons + '#pencil-square'}></use>
                    </svg>
                  </Button>
                  {isOpenEditModal && <EditingWater id={isId} />}
                </TableCell>
                <TableCell>
                  <Button
                    aria-label="Delete notice"
                    type="button"
                    onClick={() => {
                      setIsId(data._id);
                      setIsOpenDeleteModal(!isOpenDeleteModal);
                    }}
                  >
                    <svg className={css.icon_trash} width="16" height="16">
                      <use href={Icons + '#trash'}></use>
                    </svg>
                  </Button>
                  {isOpenDeleteModal && <DeleteWater id={isId} />}
                </TableCell>
              </TableRow>
            ))}
          </tbody>
        </TableStyled>
        <AddButton
          type="button"
          onClick={() => {
            setIsOpenAddModal(!isOpenAddModal);
          }}
        >
          + Add water
        </AddButton>
        {isOpenAddModal && <AddWater />}
      </Viewport>
    </Container>
  );
};

export default Today;
