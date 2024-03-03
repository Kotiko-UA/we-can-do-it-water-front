import { useNavigate } from 'react-router-dom';
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
  BenefitsContainer,
} from './HomeDefaultPage.styled';
import { useEffect } from 'react';
import axios from 'axios';

const instanceWakeUp = axios.create();
instanceWakeUp.defaults.baseURL = 'https://water-p2oh.onrender.com/api';
const HomeDefaultPage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/signup');
  };
  useEffect(() => {
    const backEndWakeUp = async () => {
      try {
        await instanceWakeUp.get(`/waternotes/`);
      } catch (error) {
        console.log('backend is not sleep now xD');
      }
    };

    backEndWakeUp();
  }, []);

  return (
    <HomeSection>
      <Container>
        <BenefitsContainer>
          <Heading>Water consumption tracker</Heading>
          <Paragraph>Record daily water intake and track</Paragraph>
          <ListTitle>Tracker Benefits</ListTitle>
          <ListBenefits>
            <Li style={{ width: ' 248px' }}>
              <Calendar alt="calendar" />
              <Text>Habit drive</Text>
            </Li>
            <Li style={{ width: ' 248px' }}>
              <Presentation alt="presentation" />
              <Text>View statistics</Text>
            </Li>

            <Li style={{ width: ' 248px' }}>
              <Screw alt="screw" />
              <Text>Personal rate setting</Text>
            </Li>
          </ListBenefits>
          <Button onClick={handleClick}>Try tracker</Button>
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

export default HomeDefaultPage;
