import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { CancelButton, Container, LogOutButton, LogOutContainer, LogOutText, Modal, Overlay, SecondaryText, MediaButtonsContainer, CloseButton, Close } from "./LogOut.styled";
import { logOut } from "components/redux/auth/operations";

export const LogOut = ({ backdropClick, close }) => {

    const dispatch = useDispatch();
    
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
        <Overlay id="logout" onClick={backdropClick}>
            <Modal>
                <Container>
                <LogOutContainer>
                    <LogOutText>Log out</LogOutText>
                    <CloseButton type="button" onClick={close}><Close /></CloseButton>
                </LogOutContainer>
                    <SecondaryText>Do you really want to leave?</SecondaryText>
                    <MediaButtonsContainer>
                        <LogOutButton type="submit" onClick={() => {dispatch(logOut()); close()}}>Log out</LogOutButton>
                    <CancelButton onClick={close}>Cancel</CancelButton>
                    </MediaButtonsContainer>
                </Container>
            </Modal>
        </Overlay>
    )
}