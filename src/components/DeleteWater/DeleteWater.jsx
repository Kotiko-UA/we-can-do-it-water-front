import { useDispatch } from 'react-redux';
import {
  BodyModal,
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

export const DeleteWater = ({ deleteId, close }) => {
  const dispatch = useDispatch();
  const onDelete = async deleteId => {
    await dispatch(deleteWater(deleteId));
    close();
  };

  return (
    <BodyModal>
      <Wrap>
        <Titel>Delete entry</Titel>
      </Wrap>

      <Text>Are you sure you want to delete the entry?</Text>
      <ButtonWrap>
        <ButCancel onClick={close}>
          <Can>Cancel</Can>
        </ButCancel>
        <ButDelete onClick={() => onDelete(deleteId)}>
          <Del>Delete</Del>
        </ButDelete>
      </ButtonWrap>
    </BodyModal>
  );
};
