import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import React, { useEffect, useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import { uk } from 'date-fns/locale/uk';

import {
  Backdrop,
  BodyModal,
  Tilel,
  ChoWal,
  AmoWate,
  Time,
  ValueWater,
  WaterMl,
  ButSave,
  ButMinus,
  ButValue,
  ButPlus,
  WaterMlBeg,
  WrapValue,
  WraperTitel,
  StyledInput,
  StyledDatePicker,
  WrapSave,
  StileSave,
  ButClose,
  SaveTime,
  OldWaterState,
  OldWaterMlBeg,
  GlassSvg,
} from './EditingWater.styled';
import { useDispatch, useSelector } from 'react-redux';
import { updateWater } from 'components/redux/water/operations';
// необхідно додати  "date-fns": "^3.0.6", "react-datepicker": "^4.25.0",
const waterValidationSchema = Yup.object().shape({
  water: Yup.number()
    .integer()
    .positive()
    .max(999)
    .required('Please enter a valid number between 1 and 999'),
});

export const EditingWater = ({ id }) => {
  registerLocale('uk', uk);
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState(new Date());
  const [waterValue, setWaterValue] = useState(250);
  const oldWaterValue = useSelector(state =>
    state.water.entries.find(entry => entry.id === id)
  );
  useEffect(() => {
    if (oldWaterValue) {
      setStartDate(new Date(oldWaterValue.time));
      setWaterValue(oldWaterValue.amount);
    }
  }, [id, oldWaterValue]);

  const roundedValueWater = value => Math.round(value / 50) * 50;
  const time = startDate.toLocaleTimeString('uk', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
  // const storedValue = localStorage.getItem({id});
  // const oldValue = JSON.parse(storedValue);
  const onSubmit = (values, actions) => {
    const amount = values.water;
    console.log(amount);

    console.log(time);
    const updatedWater = { amount, time };
    dispatch(updateWater(id, updatedWater));
    actions.resetForm();
  };
  //захист щоб користувач не міг видалити весь час з DatePicker та зламати код + стилізація
  const CustomInput = React.forwardRef(({ value, onClick }, ref) => (
    <StyledDatePicker
      type="text"
      value={value}
      readOnly
      ref={ref}
      onClick={onClick}
    />
  ));
  return (
    <Backdrop>
      <BodyModal>
        <Formik
          initialValues={{ water: waterValue }}
          onSubmit={onSubmit}
          validationSchema={waterValidationSchema}
        >
          {({ values, setFieldValue }) => (
            <Form>
              <WraperTitel>
                <Tilel>Edit the entered amount of water</Tilel>
                <ButClose></ButClose>
              </WraperTitel>
              <OldWaterState>
                <GlassSvg></GlassSvg>
                <OldWaterMlBeg>{oldWaterValue.amount}ml</OldWaterMlBeg>
                <SaveTime>{oldWaterValue.time}</SaveTime>
              </OldWaterState>
              <ChoWal>Choose a value:</ChoWal>
              <AmoWate>Amount of water:</AmoWate>
              <WrapValue>
                <ButValue
                  type="button"
                  onClick={() => {
                    const roundedValue = roundedValueWater(waterValue - 50);
                    const newValue = roundedValue >= 0 ? roundedValue : 0;
                    setWaterValue(newValue);
                    setFieldValue('water', newValue);
                  }}
                >
                  <ButMinus />
                </ButValue>
                <WaterMlBeg>{waterValue}ml</WaterMlBeg>
                <ButValue
                  type="button"
                  onClick={() => {
                    const roundedValue = roundedValueWater(waterValue + 50);
                    const newValue = Math.min(roundedValue, 999);
                    setWaterValue(newValue);
                    setFieldValue('water', newValue);
                  }}
                >
                  <ButPlus />
                </ButValue>
              </WrapValue>
              <Time>Recording time:</Time>
              <DatePicker
                locale="uk"
                selected={startDate}
                onChange={date => {
                  setStartDate(date);
                }}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={5}
                timeCaption="Time"
                dateFormat="H:mm"
                customInput={<CustomInput />}
              />
              <ValueWater>Enter the value of the water used:</ValueWater>
              <StyledInput
                name="water"
                value={values.water}
                onChange={e => {
                  const inputValue = e.target.value.trim();
                  if (inputValue === '') {
                    setFieldValue('water', '');
                  } else {
                    let numericValue = parseInt(inputValue, 10);
                    if (isNaN(numericValue)) {
                      numericValue = 0;
                    }

                    if (numericValue < 0) {
                      numericValue = 0;
                    }
                    setWaterValue(numericValue);
                    setFieldValue('water', numericValue);
                  }
                }}
                readOnly={false}
                min={0}
                max={999}
                maxLength={3}
              />
              <WrapSave>
                <WaterMl>{waterValue}ml</WaterMl>
                <ButSave type="submit">
                  <StileSave>Save</StileSave>
                </ButSave>
              </WrapSave>
            </Form>
          )}
        </Formik>
      </BodyModal>
    </Backdrop>
  );
};
