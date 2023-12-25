import { useEffect } from "react";
import { VscChromeClose } from "react-icons/vsc";
import { PiUploadSimpleThin } from "react-icons/pi";

import { Avatar, AvatarContainer, Container, GenderLabel, InputFile, Label, MainContainer, Modal, DataContainer, Overlay, SettingContainer, SettingText, DataLabel, PasswordLabel, CommonInput, YourPhoto, Text, SaveButton, PasswordInputContainer, PasswordContainer, GenderRadio, CloseButton, InfoContainer, CommonInfoContainer, AvatarOutContainer } from "./Setting.styled";
import { PasswordInput } from "components/PasswordInput/PasswordInput";

export const Setting = ({ backdropClick, close }) => {

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
                <SettingContainer>
                    <SettingText>Setting</SettingText>
                    <CloseButton type="button" onClick={close}><VscChromeClose /></CloseButton>
                </SettingContainer>
                    <MainContainer>
                        <div>
                        <AvatarOutContainer>
                        <YourPhoto>Your photo</YourPhoto>
                        <AvatarContainer>
                            <Avatar></Avatar>
                            <InputFile type="file" name="file" id="file" />
                            <Label label for="file"><PiUploadSimpleThin size="14" /> Upload a photo</Label>
                            </AvatarContainer>
                            </AvatarOutContainer>
                        </div>
                        <CommonInfoContainer>
                        <InfoContainer>
                        <div>
                            <Text>Your gender identity</Text>
                            <GenderRadio id="girl" type="radio" value="girl" name="gender" required />
                            {/* <CustomRadio/> */}
                            <GenderLabel for="girl">Girl</GenderLabel>
                            <GenderRadio id="man" type="radio" value="man" name="gender" />
                            {/* <CustomRadio/> */}
                            <GenderLabel for="man">Man</GenderLabel>
                        </div>
                        <DataContainer>
                            <DataLabel for="name">Your name</DataLabel>
                            <CommonInput id="name" type="text" name="name" placeholder="Name" maxLength={32} />
                            <DataLabel for="email">E-mail</DataLabel>
                            <CommonInput id="email" type="text" name="email" placeholder="E-mail" />
                            </DataContainer>
                        </InfoContainer>
                        <PasswordContainer>
                            <Text>Password</Text>
                            <PasswordLabel>Outdated password:</PasswordLabel>
                            <PasswordInputContainer>
                                <PasswordInput/>
                            </PasswordInputContainer>
                            <PasswordLabel>New Password:</PasswordLabel>
                            <PasswordInputContainer>
                                <PasswordInput/>
                            </PasswordInputContainer>
                            <PasswordLabel>Repeat new password:</PasswordLabel>
                            <PasswordInputContainer>
                                <PasswordInput/>
                            </PasswordInputContainer>
                            </PasswordContainer>
                        </CommonInfoContainer>
                        <SaveButton type="submit" onClick={close}>Save</SaveButton>
                </MainContainer>
                </Container>
            </Modal>
        </Overlay>
    )
}