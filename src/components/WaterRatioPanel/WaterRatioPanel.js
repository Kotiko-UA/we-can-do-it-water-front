import {
  Title,
  Wrapper,
  TitlePic,
  Progress,
  Scale,
  Button,
} from './WaterRatioPanel.styled';

export default function WaterRatioPanel() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    <Wrapper>
      <TitlePic />
      <Progress>
        <Title>Today</Title>
        <span>--------</span>
        <Scale>
          <li>0%</li>
          <li>50%</li>
          <li>100%</li>
        </Scale>
      </Progress>
      <Button>Add Water</Button>
    </Wrapper>
  );
}
