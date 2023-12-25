import {
  Calendar,
  Date,
  Day,
  LeftArrImg,
  LeftButton,
  MonthToggle,
  NameOfMonth,
  Progress,
  RightArrImg,
  RightButton,
  Title,
  TitleWrapper,
  Wrapper,
} from './MonthStatsTable.styled';

import { nanoid } from 'nanoid';

import { Month } from '../../FetchExamples/Calendar.js';

export default function MonthStatsTable() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);
  const { date } = Month[0];
  return (
    <Wrapper>
      <TitleWrapper>
        <Title>Month</Title>
        <MonthToggle>
          <LeftButton>
            <LeftArrImg />
          </LeftButton>
          <NameOfMonth>{date.split(', ')[1]}</NameOfMonth>
          <RightButton>
            <RightArrImg />
          </RightButton>
        </MonthToggle>
      </TitleWrapper>

      <Calendar>
        {Month.map(({ date, procent }) => {
          return (
            <Day key={nanoid()}>
              <Date>{date.split(',')[0]}</Date>
              <Progress>{procent}</Progress>
            </Day>
          );
        })}
        {/* <Day>
          <Date>1</Date>
          <Progress>100%</Progress>
        </Day>
        <Day>
          <Date>1</Date>
          <Progress>100%</Progress>
        </Day>
        <Day>
          <Date>1</Date>
          <Progress>100%</Progress>
        </Day>
        <Day>
          <Date>1</Date>
          <Progress>100%</Progress>
        </Day>
        <Day>
          <Date>1</Date>
          <Progress>100%</Progress>
        </Day>
        <Day>
          <Date>1</Date>
          <Progress>100%</Progress>
        </Day>
        <Day>
          <Date>1</Date>
          <Progress>100%</Progress>
        </Day>
        <Day>
          <Date>1</Date>
          <Progress>100%</Progress>
        </Day>
        <Day>
          <Date>1</Date>
          <Progress>100%</Progress>
        </Day>
        <Day>
          <Date>1</Date>
          <Progress>100%</Progress>
        </Day> */}
      </Calendar>
    </Wrapper>
  );
}
