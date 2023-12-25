import {
  ButtonDel,
  ButtonEdit,
  DelImg,
  EditImg,
  List,
  ListItem,
  LogoGlass,
  Quantity,
  Time,
  Title,
  Wrapper,
  WrapperOfBtn,
  WrapperOfDate,
} from './TodayWaterList.styled';

import { DayInfo } from '../../FetchExamples/DayInfo.js';

export default function TodayWaterList() {
  console.log(DayInfo);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    <Wrapper>
      <Title>Today</Title>
      <List>
        {DayInfo.map(({ _id, amount, time }) => {
          return (
            <ListItem key={_id}>
              <WrapperOfDate>
                <LogoGlass />
                <Quantity>{amount} ml</Quantity>
                <Time>{time}</Time>
              </WrapperOfDate>
              <WrapperOfBtn>
                <ButtonEdit>
                  <EditImg />
                </ButtonEdit>
                <ButtonDel>
                  <DelImg />
                </ButtonDel>
              </WrapperOfBtn>
            </ListItem>
          );
        })}
      </List>
    </Wrapper>
  );
}
