import React from 'react';
import { createPortal } from 'react-dom';
import {
  OverLay,
  ButtonClose,
  Modal,
  Svg,
  Div,
  TitleModal,
  ButtonSave,
} from './Modal.styled';
import { useEffect } from 'react';

// 1. В компоненте где хотите рендерить модалку обьвляете локальній стейт
// const [isOpen, setIsOpen] = useState(false);
// и функцию:
// const toggleModal = () => {
//   setIsOpen(prevstate => !prevstate);
// };
// 2. рендер модалки по условию (пропсы  title= заголовок модалки, и тогл)
//  { isOpen && <Modalochka toggleModal={toggleModal} title={'add'}>
// <сдесь компонент чилдрен>
// </Modalochka >;
// 3. конопка открітия у каждого своя . открітие пропс тогл
// 4. стили прописаны для модалки для всех єкранов. Стили для компонента-чилдрен у каждого свои.
//  }

const modalElement = document.getElementById('portal');

export const Modalochka = ({ children, title, toggleModal }) => {
  const onClickBackdrop = e => {
    if (e.currentTarget === e.target) {
      toggleModal();
    }
  };
  useEffect(() => {
    const onEscapeClick = e => {
      if (e.code === 'Escape') {
        toggleModal();
      }
    };
    window.addEventListener('keydown', onEscapeClick);

    return () => {
      window.removeEventListener('keydown', onEscapeClick);
    };
  }, [toggleModal]);

  return createPortal(
    <OverLay onClick={onClickBackdrop}>
      <Modal>
        <Div>
          <TitleModal> {title} </TitleModal>
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
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </Svg>
          </ButtonClose>
        </Div>
        <h2>
          сдесь вставляете свой контент ввиде комонента и его стилизируете этот
          н2 убираете
        </h2>
        {children}
        <ButtonSave onClick={toggleModal}>Save</ButtonSave>
      </Modal>
    </OverLay>,
    modalElement
  );
};