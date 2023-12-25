import { Button, Title, Value, Wrapper } from './DailyNorma.styled';

export default function DailyNorma() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    <Wrapper>
      <Title>My daily norma</Title>
      <Value>1.5L</Value>
      <Button>Edit</Button>
    </Wrapper>
  );
}
