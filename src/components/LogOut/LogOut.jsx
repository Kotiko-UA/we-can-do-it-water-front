import { VscChromeClose } from "react-icons/vsc";
import { CancelButton, Container, LogOutButton, LogOutContainer, LogOutText, Modal, Overlay, SecondaryText, MediaButtonsContainer } from "./LogOut.styled";

export const LogOut = () => {
    return (
        <Overlay>
            <Modal>
                <Container>
                <LogOutContainer>
                    <LogOutText>Log out</LogOutText>
                    <VscChromeClose color="rgba(64, 123, 255, 1)" size="18" />
                </LogOutContainer>
                    <SecondaryText>Do you really want to leave?</SecondaryText>
                    <MediaButtonsContainer>
                    <LogOutButton>Log out</LogOutButton>
                    <CancelButton>Cancel</CancelButton>
                    </MediaButtonsContainer>
                </Container>
            </Modal>
        </Overlay>
    )
}