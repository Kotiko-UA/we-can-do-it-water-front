import {
  Container,
  Heading,
  Paragraph,
  ListTitle,
  List,
  Li,
  Calendar,
  Presentation,
  Screw,
  Point,
  Button,
  Text,
  ArgumentsContainer,
  ListBenefits,
  HomeSection,
  BenefitsContainer
} from './MainPage.styled';

import { useState } from "react";

import { PopUpsLinks } from "../../components/PopUpsLinks/PopUpsLinks";
import { LogOut } from "../../components/LogOut/LogOut";
import { Setting } from "../../components/Setting/Setting";


const MainPage = () => {
  
  const [setting, setSetting] = useState(false);
  const [logOut, setLogOut] = useState(false);

  const changeSetting = () => {
    setting ? setSetting(false) : setSetting(true)
  }

  const changeLogOut = () => {
    logOut ? setLogOut(false) : setLogOut(true)
  }

  const handleBackdropClickSetting = (evt) => {
    if (evt.target === evt.currentTarget) {
      setSetting(false)
    }
  }

  const closeSetting = () => {
    setSetting(false)
  }

  const handleBackdropClickLogOut = (evt) => {
    if (evt.target === evt.currentTarget) {
      setLogOut(false)
    }
  }

  const closeLogOut = () => {
      setLogOut(false)
  }

  return (
    <HomeSection>
      <Container>
        <div>
      <PopUpsLinks showLogOut={changeLogOut} showSetting={changeSetting} />
      {setting && <Setting backdropClick={handleBackdropClickSetting} close={closeSetting} />}
      {logOut && <LogOut backdropClick={handleBackdropClickLogOut} close={closeLogOut} />}
    </div>
        <BenefitsContainer>
          <Heading>Water consumption tracker</Heading>
          <Paragraph>Record daily water intake and track</Paragraph>
          <ListTitle>Tracker Benefits</ListTitle>
          <ListBenefits>
            <Li style={{width:' 248px'}}>
              <Calendar alt="calendar" />
              <Text>Habit drive</Text>
            </Li>
            <Li style={{width:' 248px'}}>
              <Presentation alt="presentation" />
              <Text>View statistics</Text>
            </Li>
        
            <Li style={{width:' 248px'}}>
              <Screw alt="screw" />
              <Text>Personal rate setting</Text>
            </Li>
          </ListBenefits>
          <Button>Try tracker</Button>
        </BenefitsContainer>
        <ArgumentsContainer>
          <ListTitle>Why drink water</ListTitle>
          <List>
            <Li>
              <Point alt="point" />
              <Text>Supply of nutrients to all organs</Text>
            </Li>
            <Li>
              <Point alt="point" />
              <Text>Providing oxygen to the lungs</Text>
            </Li>
            <Li>
              <Point alt="point" />
              <Text>Maintaining the work of the heart</Text>
            </Li>
            <Li>
              <Point alt="point" />
              <Text>Release of processed substances</Text>
            </Li>
            <Li>
              <Point alt="point" />
              <Text>Ensuring the stability of the internal environment</Text>
            </Li>
            <Li>
              <Point alt="point" />
              <Text>Maintaining within the normal temperature</Text>
            </Li>
            <Li>
              <Point alt="point" />
              <Text>
                Maintaining an immune system capable of resisting disease
              </Text>
            </Li>
          </List>
        </ArgumentsContainer>
      </Container>
    </HomeSection>
  );
};

export default MainPage;
