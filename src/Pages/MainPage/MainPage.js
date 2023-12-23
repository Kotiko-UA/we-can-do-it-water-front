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
  Button,
  Text,
  ArgumentsContainer,
  ListBenefits,
} from './MainPage.styled';
const MainPage = () => {
  return (
    <Container>
      <div>
        <Heading>Water consumption tracker</Heading>
        <Paragraph>Record daily water intake and track</Paragraph>
        <ListTitle>Tracker Benefits</ListTitle>
        <ListBenefits>
          <Li>
            <Calendar alt="calendar" />
            <Text>Habit drive</Text>
          </Li>
          <Li>
            <Presentation alt="presentation" />
            <Text>View statistics</Text>
          </Li>
          <Li>
            <Screw alt="screw" />
            <Text>Personal rate setting</Text>
          </Li>
        </ListBenefits>
        <Button>Try tracker</Button>
      </div>
      <ArgumentsContainer>
        <ListTitle>Why drink water</ListTitle>
        <List>
          <li>
            <Text>Supply of nutrients to all organs</Text>
          </li>
          <li>
            <Text>Providing oxygen to the lungs</Text>
          </li>
          <li>
            <Text>Maintaining the work of the heart</Text>
          </li>
          <li>
            <Text>Release of processed substances</Text>
          </li>
          <li>
            <Text>Ensuring the stability of the internal environment</Text>
          </li>
          <li>
            <Text>Maintaining within the normal temperature</Text>
          </li>
          <li>
            <Text>
              Maintaining an immune system capable of resisting disease
            </Text>
          </li>
        </List>
      </ArgumentsContainer>
    </Container>
  );
};

export default MainPage;
