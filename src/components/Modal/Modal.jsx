import React from 'react';
import { createPortal } from 'react-dom';
import { OverLay, ButtonClose, Modal, Svg } from './Modal.styled';
import { useEffect } from 'react';

const modalElement = document.getElementById('portal');

export const Modalochka = ({ children, title, toggleModal }) => {
  const onClickBackdrop = e => {
    if (e.target === e.currentTarget) {
      toggleModal();
    }
  };
  useEffect(() => {
    const onEscapeClick = e => {
      if (e.code === 'Escape') {
        toggleModal();
      }
    };
    const body = document.querySelector('body');

    body.style.position = 'fixed';
    window.addEventListener('keydown', onEscapeClick);

    return () => {
      body.style.position = '';
      window.removeEventListener('keydown', onEscapeClick);
    };
  }, [toggleModal]);

  return createPortal(
    <OverLay onMouseDown={onClickBackdrop}>
      <Modal>
        <ButtonClose onClick={toggleModal} type="button">
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M6 18L18 6M6 6L18 18"
              stroke="#407BFF"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Svg>
        </ButtonClose>

        {children}
      </Modal>
    </OverLay>,
    modalElement
  );
};
