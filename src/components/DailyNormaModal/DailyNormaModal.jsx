import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  ButtonSave,
  ErrMsg,
  FieldForm,
  FormCalculateWrap,
  FormStyled,
  Formula,
  LabelFormNorma,
  ModalWin,
  NormaWrap,
  RadioBtnField,
  RadioBtnLabel,
  RadioWrap,
  SpanStar,
  Subtitle,
  TextNorma,
  TextWrap,
  Title,
  WrapInfo,
  WrapTitle,
} from './DailyNormaModal.styled';
import { useDispatch, useSelector } from 'react-redux';

import { addDailyNorma } from 'components/redux/auth/operations';
import { selectError, selectGender } from 'components/redux/auth/selectors';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const DailyNormaSchema = Yup.object().shape({
  weight: Yup.number().moreThan(-1, 'The value must be positive!'),
  time: Yup.number()
    .max(24, 'The value is too large!')
    .moreThan(-1, 'The value must be positive!'),
  drink: Yup.number()
    .max(15, 'The value is too large!')
    .required('You must enter a value')
    .positive('The value must be positive!'),
});

const normaForGirl = values => {
  return values.weight * 0.03 + values.time * 0.4;
};
const normaForMan = values => {
  return values.weight * 0.04 + values.time * 0.6;
};

export const DailyNormaModal = ({ close }) => {
  const dispatch = useDispatch();
  const gender = useSelector(selectGender);


  const [weightEntered, setWeightEntered] = useState(false);
  const [timeEntered, setTimeEntered] = useState(false);
  const [drinkEntered, setDrinkEntered] = useState(false);

  const handleSave = (values, actions) => {
    dispatch(addDailyNorma(values.drink))
      .unwrap()
      .then(() => {
        actions.resetForm();
        // closeModal();
      })
      .catch((error) => {
        toast.error('Oops, something went wrong. Please try again');
      });
  };
  

  const dailyNormaCounter = values =>
    values.picked === 'female'
      ? normaForGirl(values).toFixed(1)
      : values.picked === 'male'
      ? normaForMan(values).toFixed(1)
      : 0;

  return (
    <ModalWin>
      <WrapTitle>
        <Title>My daily norma</Title>
      </WrapTitle>
      <div>
        <TextWrap>
          <p>
            For girl: <Formula>V=(M*0,03) + (T*0,4)</Formula>
          </p>
          <p>
            For man: <Formula>V=(M*0,04) + (T*0,6)</Formula>
          </p>
        </TextWrap>
        <WrapInfo>
          <SpanStar>*</SpanStar> V is the volume of the water norm in liters per
          day, M is your body weight, T is the time of active sports, or another
          type of activity commensurate in terms of loads (in the absence of
          these, you must set 0)
        </WrapInfo>
      </div>
      <Formik
        initialValues={{
          picked: gender,
          weight: '',
          time: '',
          drink: '',
        }}
        validationSchema={DailyNormaSchema}
        onSubmit={(values, actions) => handleSave(values, actions)}
      >
        {({ values }) => (
          <FormStyled>
            <FormCalculateWrap>
              <Subtitle>Calculate your rate:</Subtitle>
              <RadioWrap role="group" aria-labelledby="my-radio-group">
                <RadioBtnLabel>
                  <RadioBtnField type="radio" name="picked" value="female" />
                  For girl
                </RadioBtnLabel>
                <RadioBtnLabel>
                  <RadioBtnField type="radio" name="picked" value="male" />
                  For man
                </RadioBtnLabel>
              </RadioWrap>

              <label>
                Your weight in kilograms:
                <FieldForm
                  id="weight"
                  name="weight"
                  type="number"
                  placeholder={weightEntered ? '' : '0'}
                  onFocus={() => setWeightEntered(true)}
                />
                <ErrMsg name="weight" component="div" />
              </label>
              <label>
                The time of active participation in sports or other activities
                with a high physical load:
                <FieldForm
                  id="time"
                  name="time"
                  type="number"
                  placeholder={timeEntered ? '' : '0'}
                  onFocus={() => setTimeEntered(true)}
                />
                <ErrMsg name="time" component="div" />
              </label>
              <NormaWrap>
                <p>The required amount of water in liters per day:</p>
                <TextNorma>{dailyNormaCounter(values)} </TextNorma>
              </NormaWrap>
              <LabelFormNorma>
                Write down how much water you will drink:
                <FieldForm
                  id="drink"
                  name="drink"
                  type="number"
                  placeholder={drinkEntered ? '' : '0'}
                  onFocus={() => setDrinkEntered(true)}
                />
                <ErrMsg name="drink" component="div" />
              </LabelFormNorma>
            </FormCalculateWrap>
            <ButtonSave type="submit">Save</ButtonSave>
          </FormStyled>
        )}
      </Formik>
    </ModalWin>
  );
};
