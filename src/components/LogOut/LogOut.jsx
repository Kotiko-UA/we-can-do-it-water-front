import { useEffect } from "react";
import { VscChromeClose } from "react-icons/vsc";

import { CancelButton, Container, LogOutButton, LogOutContainer, LogOutText, Modal, Overlay, SecondaryText, MediaButtonsContainer, CloseButton } from "./LogOut.styled";

export const LogOut = ({ backdropClick, close }) => {
    
    useEffect(() => {
  const handleKeydown = e => {
    if (e.code === 'Escape') {
        close()
      }
    }

    window.addEventListener('keydown', handleKeydown)
    
    return () => {
    window.removeEventListener('keydown', handleKeydown)
    }
}, [close])

    return (
        <Overlay onClick={backdropClick}>
            <Modal>
                <Container>
                <LogOutContainer>
                    <LogOutText>Log out</LogOutText>
                    <CloseButton type="button" onClick={close}><VscChromeClose /></CloseButton>
                </LogOutContainer>
                    <SecondaryText>Do you really want to leave?</SecondaryText>
                    <MediaButtonsContainer>
                    <LogOutButton>Log out</LogOutButton>
                    <CancelButton onClick={close}>Cancel</CancelButton>
                    </MediaButtonsContainer>
                </Container>
            </Modal>
        </Overlay>
    )
}