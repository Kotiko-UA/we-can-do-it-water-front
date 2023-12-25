import { useEffect } from 'react';
import {
  Backdrop,
  ButtonClose,
  Modal,
  TeamCart,
  TeamLink,
  TeamList,
  TeamName,
  TeamPhoto,
  TeamRole,
} from './TeamsModel.styled';
import teamGroup from './teamArr';
export const TeamModal = ({ onClick }) => {
  useEffect(() => {
    const handleClick = e => {
      if (e.target === e.currentTarget) {
        onClick();
      }
    };
    const handleKeydown = e => {
      if (e.key === 'Escape') {
        onClick();
      }
    };
    const backdrop = document.querySelector('.js-backdrop');
    document.addEventListener('keydown', handleKeydown);
    backdrop.addEventListener('click', handleClick);
    return () => {
      backdrop.removeEventListener('click', handleClick);
      document.removeEventListener('keydown', handleKeydown);
    };
  }, [onClick]);

  return (
    <Backdrop className="js-backdrop">
      <Modal>
        <ButtonClose type="button">X</ButtonClose>
        <TeamList>
          {teamGroup.map(({ id, link, name, photo, role }) => {
            return (
              <TeamCart key={id}>
                <TeamLink
                  href={link}
                  target="_blank"
                  rel="noreferrer noopener nofollow"
                >
                  <TeamPhoto src={photo} alt={name} />
                  <TeamName>{name}</TeamName>
                  <TeamRole>{role}</TeamRole>
                </TeamLink>
              </TeamCart>
            );
          })}
        </TeamList>
      </Modal>
    </Backdrop>
  );
};
