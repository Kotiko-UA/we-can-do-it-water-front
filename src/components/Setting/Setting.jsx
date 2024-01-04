import { AvatarContainer, Container, GenderLabel, InputFile, Label, MainContainer, Modal, DataContainer, Overlay, SettingContainer, SettingText, DataLabel, PasswordLabel, CommonInput, YourPhoto, Text, SaveButton, PasswordInputContainer, PasswordContainer, GenderRadio, CloseButton, InfoContainer, CommonInfoContainer, AvatarOutContainer, Close, UploadSvg, Avatar } from "./Setting.styled";
import { PasswordInput } from "components/PasswordInput/PasswordInput";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "components/redux/auth/selectors";
import { updateAvatar } from "components/redux/auth/operations";

export const Setting = ({ toggleModal, close }) => {
    const currentUser = useSelector(selectUser);
    const avatar = currentUser.avatarURL;
    console.log(currentUser)

    const dispatch = useDispatch();

    function changeAvatar(evt) {
        const file = evt.target.files[0]
        dispatch(updateAvatar(file))
    }

    return (
        <Overlay id="settings">
            <Modal onClick={toggleModal}>
                <Container>
                <SettingContainer>
                    <SettingText>Setting</SettingText>
                    <CloseButton type="button" onClick={close}><Close /></CloseButton>
                </SettingContainer>
                    <MainContainer>
                        <div>
                        <AvatarOutContainer>
                        <YourPhoto>Your photo</YourPhoto>
                        <AvatarContainer>
                            <Avatar src={avatar} alt="avatar" />
                                    <InputFile type="file" name="file" id="file" accept="image/*"
                                        onChange={(evt) => changeAvatar(evt)}
                                    />
                            <Label label for="file"><UploadSvg /> Upload a photo</Label>
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