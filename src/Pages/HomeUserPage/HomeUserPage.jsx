import { Container, WrapperHomePage } from './HomeUserPage.styled';

import Calendar from './components/Calendar/Calendar';
import { useState } from 'react';
import { DailyNormaModal } from 'components/DailyNormaModal/DailyNormaModal';
import { DailyNorma } from './components/MyDailyNorma/DailyNorma/DailyNorma';
import { Modalochka } from 'components/Modal/Modal';
import { AddWater } from 'components/AddWater/addWater';
import { EditingWater } from 'components/EditingWater/EditingWater';
import { DeleteWater } from 'components/DeleteWater/DeleteWater';

const HomeUserPage = () => {
  const [dailyNormaModal, setDailyNormaModal] = useState(false);
  // const [addWaterModal, setAddWaterModal] = useState(false);
  // const [correctWaterModal, setCorrectWaterModal] = useState(false);
  // const [delWaterModal, setDelWaterModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [addWater, setAddWater] = useState(false);
  const [editingWater, setEditingWater] = useState(false);
  const [deleteWater, setDeleteWater] = useState(false);
  const [dailyNorma, setDailyNorma] = useState(false);
  const [deletedId, setdeletedId] = useState('');
  const [editingId, setEditingId] = useState('');
  const toggleModal = () => {
    setIsOpen(prevState => !prevState);
  };
  function onAddWater() {
    setAddWater(true);
    setEditingWater(false);
    setDeleteWater(false);
    setDailyNorma(false);
    toggleModal();
  }
  function onEditingWater(id) {
    setEditingId(id);
    setAddWater(false);
    setEditingWater(true);
    setDeleteWater(false);
    setDailyNorma(false);
    toggleModal();
  }
  function onDeleteWater(id) {
    setdeletedId(id);
    setAddWater(false);
    setEditingWater(false);
    setDeleteWater(true);
    setDailyNorma(false);
    toggleModal();
  }

  function onDailyNorma() {
    setAddWater(false);
    setEditingWater(false);
    setDeleteWater(false);
    setDailyNorma(true);
    toggleModal();
  }
  const close = () => {
    setIsOpen(false);
  };
  const onClick = modal => {
    switch (modal) {
      case 'edit-daily-norm':
        setDailyNormaModal(!dailyNormaModal);
        return;

      default:
        return;
    }
  };
  return (
    <Container>
      <WrapperHomePage>
        <DailyNorma onClick={onClick} onAddWater={onAddWater} />
        <Calendar
          onDeleteWater={onDeleteWater}
          onEditingWater={onEditingWater}
          onAddWater={onAddWater}
        />
      </WrapperHomePage>
      {isOpen && (
        <Modalochka toggleModal={toggleModal}>
          {addWater && <AddWater close={close} />}
          {editingWater && <EditingWater editingId={editingId} close={close} />}
          {deleteWater && <DeleteWater deleteId={deletedId} close={close} />}
          {dailyNorma && <DailyNormaModal close={close} />}
        </Modalochka>
      )}
      {dailyNormaModal && <DailyNormaModal onClick={onClick} />}
    </Container>
  );
};

export default HomeUserPage;
