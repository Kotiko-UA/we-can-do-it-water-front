import { Outlet } from 'react-router-dom';
import HeaderMarkup from 'components/HeaderMarkup/HeaderMarkup.jsx';
// import { Suspense } from 'react';
import { Header } from './Layout.styled.js';
import { useState } from 'react';
import { Paskal } from 'components/pascal/paskal.jsx';
import { TeamModal } from 'components/teams/TeamModal.jsx';
import { Setting } from 'components/Setting/Setting.jsx';
import { LogOut } from 'components/LogOut/LogOut.jsx';
//import { useSelector } from 'react-redux';
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

  // const changeSetting = () => {
  //     settingModal ? setSettingModal(false) : setSettingModal(true);
  //   };

  //   const changeLogOut = () => {
  //     // logOutModal ? setLogOutModal(false) : setLogOutModal(true);
  //     logOutModal ? setLogOutModal(false) : setLogOutModal(true);
  //   };

  //   const handleBackdropClickSetting = evt => {
  //     if (evt.target === evt.currentTarget) {
  //       setSettingModal(false);
  //     }
  //   };

  //   const handleBackdropClickLogOut = evt => {
  //     if (evt.target === evt.currentTarget) {
  //       setLogOutModal(false);
  //     }
  //   };

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

  // не працює, треба не через редакс
  //const loading = useSelector(state => state.auth.isLoading);

  return (
    <div>
      <Header>
        <HeaderMarkup
          onClickSetting={onClickSetting}
          onClickLogout={onClickLogout}
        />
      </Header>
      <main>
        <Outlet />
        {isOpen && (
          <Modalochka toggleModal={toggleModal}>
            {settingModal && <Setting close={close} />}
            {logOutModal && <LogOut close={close} />}
          </Modalochka>
        )}
        {/* <Suspense> */}

        {/* </Suspense> */}
        {modal && <TeamModal onClick={onClickPaskal} />}
        <Paskal onClick={onClickPaskal} />
        {(isLoading || isLoadingWater) && <Loader />}
      </main>
    </div>
  );
};
