import { Outlet } from 'react-router-dom';
import HeaderMarkup from 'components/HeaderMarkup/HeaderMarkup.jsx';

import { Header } from './Layout.styled.js';
import { Suspense, useState } from 'react';
import { Paskal } from 'components/pascal/paskal.jsx';
import { TeamModal } from 'components/teams/TeamModal.jsx';
import { Setting } from 'components/Setting/Setting.jsx';
import { LogOut } from 'components/LogOut/LogOut.jsx';
import { Loader } from 'components/Loader.jsx';
import { useAuth } from 'Hooks/useAuth.js';
import { Modalochka } from 'components/Modal/Modal.jsx';

export const Layout = () => {
  const [modal, setModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [settingModal, setSettingModal] = useState(false);
  const [logOutModal, setLogOutModal] = useState(false);
  const { isLoading } = useAuth();
  const { isLoadingWater } = useAuth();

  const onClickPaskal = () => {
    setModal(prevState => !prevState);
  };

  const toggleModal = () => {
    setIsOpen(prevState => !prevState);
  };

  function onClickSetting() {
    setLogOutModal(false);
    setSettingModal(true);
    toggleModal();
  }
  function onClickLogout() {
    setSettingModal(false);
    setLogOutModal(true);
    toggleModal();
  }

  const close = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <Header>
        <HeaderMarkup
          onClickSetting={onClickSetting}
          onClickLogout={onClickLogout}
        />
      </Header>
      <main>
        <Suspense>
          <Outlet />
        </Suspense>
        {isOpen && (
          <Modalochka toggleModal={toggleModal}>
            {settingModal && <Setting close={close} />}
            {logOutModal && <LogOut close={close} />}
          </Modalochka>
        )}

        {modal && <TeamModal onClick={onClickPaskal} />}
        <Paskal onClick={onClickPaskal} />
        {(isLoading || isLoadingWater) && <Loader />}
      </main>
    </div>
  );
};
