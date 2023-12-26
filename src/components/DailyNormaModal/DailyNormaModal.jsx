import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import {
  Backdrop,
  BtnWrap,
  ButtonClose,
  ButtonCloseIcon,
  ButtonSave,
  ErrMsg,
  FieldForm,
  FormCalculateWrap,
  FormStyled,
  Formula,
  Label,
  LabelForm,
  LabelFormNorma,
  Modal,
  NormaSpan,
  NormaWrap,
  RadioBtnField,
  RadioBtnIcon,
  RadioBtnLabel,
  RadioWrap,
  SpanStar,
  Subtitle,
  TextNorma,
  TextWrap,
  Title,
  Wrap,
  WrapInfo,
  WrapTitle,
} from './DailyNormaModal.styled';
import { useCallback, useEffect, useState } from 'react';

const DailyNormaSchema = Yup.object().shape({
  weight: Yup.number()
    .positive('The value must be positive!')
    .required('You must enter your weight'),
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

export const DailyNormaModal = () => {
  const [modal, setModal] = useState(false);

  // const onClick = () => {
  //   setModal(!modal);
  // };

  const onClick = useCallback(() => {
    setModal(!modal);
  }, [modal]);

  useEffect(() => {
    const handleClick = e => {
      if (e.target === e.currentTarget) {
        onClick();
      }
    };

    const handleKeydown = e => {
      if (e.key === 'Escape') {
        onClick();
      }
    };

    const backdrop = document.querySelector('.js-backdrop');
    document.addEventListener('keydown', handleKeydown);
    backdrop.addEventListener('click', handleClick);

    return () => {
      backdrop.removeEventListener('click', handleClick);
      document.removeEventListener('keydown', handleKeydown);
    };
  }, [onClick]);

  const dailyNormaCounter = values =>
    values.picked === 'For girl'
      ? normaForGirl(values).toFixed(1)
      : values.picked === 'For man'
      ? normaForMan(values).toFixed(1)
      : 0;

  return (
    <Backdrop className="js-backdrop">
      <Modal>
        <WrapTitle>
          <Title>My daily norma</Title>
          <ButtonClose type="button" onClick={onClick}>
            <ButtonCloseIcon />
          </ButtonClose>
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
            <SpanStar>*</SpanStar> V is the volume of the water norm in liters
            per day, M is your body weight, T is the time of active sports, or
            another type of activity commensurate in terms of loads (in the
            absence of these, you must set 0)
          </WrapInfo>
        </div>
        <Formik
          initialValues={{
            picked: '', // Взяти із Setting
            weight: 0,
            time: 0,
            drink: 0,
          }}
          validationSchema={DailyNormaSchema}
          onSubmit={values => {
            console.log(values);
          }}
        >
          {({ values }) => (
            <FormStyled>
              {/* <div id="my-radio-group">Picked</div> */}
              <FormCalculateWrap>
                <Subtitle>Calculate your rate:</Subtitle>
                <RadioWrap role="group" aria-labelledby="my-radio-group">
                  <RadioBtnLabel>
                    <RadioBtnField
                      type="radio"
                      name="picked"
                      value="For girl"
                    />
                    For girl
                  </RadioBtnLabel>
                  <RadioBtnLabel>
                    <RadioBtnField type="radio" name="picked" value="For man" />
                    For man
                  </RadioBtnLabel>
                </RadioWrap>

                <label>
                  Your weight in kilograms:
                  <FieldForm id="weight" name="weight" type="number" />
                  <ErrMsg name="weight" component="div" />
                </label>
                <label>
                  The time of active participation in sports or other activities
                  with a high physical load:
                  <FieldForm id="time " name="time" type="number" />
                  <ErrMsg name="time" component="div" />
                </label>
                <NormaWrap>
                  <p>The required amount of water in liters per day:</p>
                  <TextNorma>{dailyNormaCounter(values)} </TextNorma>
                </NormaWrap>
                <LabelFormNorma>
                  Write down how much water you will drink:
                  <FieldForm id="drink " name="drink" type="number" />
                  <ErrMsg name="drink" component="div" />
                </LabelFormNorma>
              </FormCalculateWrap>
                <ButtonSave type="submit">Save</ButtonSave>
            </FormStyled>
          )}
        </Formik>
      </Modal>
    </Backdrop>
  );
};
