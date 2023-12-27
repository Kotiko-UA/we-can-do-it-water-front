import { Outlet } from 'react-router-dom';
import HeaderMarkup from 'components/HeaderMarkup/HeaderMarkup.jsx';
// import { Suspense } from 'react';
import { Header } from './Layout.styled.js';
import { useState } from 'react';
import { Paskal } from 'components/pascal/paskal.jsx';
import { TeamModal } from 'components/teams/TeamModal.jsx';
import { Setting } from 'components/Setting/Setting.jsx';
import { LogOut } from 'components/LogOut/LogOut.jsx';

export const Layout = () => {
  const [modal, setModal] = useState(false);
  const [settingModal, setSettingModal] = useState(false);
  const [logOutModal, setLogOutModal] = useState(false);

  const onClick = () => {
    setModal(!modal);
  };

  const changeSetting = () => {
    settingModal ? setSettingModal(false) : setSettingModal(true)
  }

  const changeLogOut = () => {
    logOutModal ? setLogOutModal(false) : setLogOutModal(true)
  }

  const handleBackdropClickSetting = (evt) => {
    if (evt.target === evt.currentTarget) {
      setSettingModal(false)
    }
  }

  const closeSetting = () => {
    setSettingModal(false)
  }

  const handleBackdropClickLogOut = (evt) => {
    if (evt.target === evt.currentTarget) {
      setLogOutModal(false)
    }
  }

  const closeLogOut = () => {
      setLogOutModal(false)
  }

  return (
    <>
      <Header>
        <HeaderMarkup toggleSetting={changeSetting} toggleLogOut={changeLogOut} />
      </Header>
      <main>
        <Outlet />
        {settingModal && <Setting backdropClick={handleBackdropClickSetting} close={closeSetting} />}
        {logOutModal && <LogOut backdropClick={handleBackdropClickLogOut} close={closeLogOut} />}
        {/* <Suspense> */}

        {/* </Suspense> */}
        {modal && <TeamModal onClick={onClick} />}
        <Paskal onClick={onClick} />
      </main>
    </>
  );
};
