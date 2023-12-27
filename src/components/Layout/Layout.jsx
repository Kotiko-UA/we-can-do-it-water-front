import { Outlet } from 'react-router-dom';
import HeaderMarkup from 'components/HeaderMarkup/HeaderMarkup.jsx';
// import { Suspense } from 'react';
import { Header } from './Layout.styled.js';
import { useState } from 'react';
import { Paskal } from 'components/pascal/paskal.jsx';
import { TeamModal } from 'components/teams/TeamModal.jsx';

export const Layout = () => {
  const [modal, setModal] = useState(false);
  const onClick = () => {
    setModal(!modal);
  };
  return (
    <>
      <Header>
        <HeaderMarkup />
      </Header>
      <main>
        <Outlet />
        {/* <Suspense> */}

        {/* </Suspense> */}
        {modal && <TeamModal onClick={onClick} />}
        <Paskal onClick={onClick} />
      </main>
    </>
  );
};
