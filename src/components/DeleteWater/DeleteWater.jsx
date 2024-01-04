import { useDispatch } from 'react-redux';
import {
  ButClose,
  BodyModal,
  Backdrop,
  ButCancel,
  ButDelete,
  Titel,
  Text,
  Del,
  Can,
  Wrap,
  ButtonWrap,
} from './DeleteWater.styled';
import { deleteWater } from 'components/redux/water/operations';

export const DeleteWater = ({ id }) => {
  const dispatch = useDispatch();
  const onDelete = id => {
    dispatch(deleteWater(id));
  };
  return (
    <Backdrop>
      <BodyModal>
        <Wrap>
          <Titel>Delete entry</Titel>
          <ButClose></ButClose>
          {/* onClose */}
        </Wrap>

        <Text>Are you sure you want to delete the entry?</Text>
        <ButtonWrap>
          <ButDelete>
            <Del onClick={() => onDelete(id)}>Delete</Del>
          </ButDelete>
          <ButCancel>
            <Can>Cancel</Can>
            {/* onClose */}
          </ButCancel>
        </ButtonWrap>
      </BodyModal>
    </Backdrop>
  );
};
