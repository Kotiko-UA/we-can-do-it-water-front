import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import React, { useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import { uk } from 'date-fns/locale/uk';

import {
  BodyModal,
  TilelAddWater,
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
} from './addWater.styled';
import { useDispatch } from 'react-redux';
import { addWater } from 'components/redux/water/operations';
const waterValidationSchema = Yup.object().shape({
  water: Yup.number()
    .integer()
    .positive()
    .max(999)
    .required('Please enter a valid number between 1 and 999'),
});

export const AddWater = ({ close }) => {
  registerLocale('uk', uk);
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState(new Date());
  const [waterValue, setWaterValue] = useState(0);
  const time = startDate.toLocaleTimeString('uk', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });

  const onSubmit = (values, actions) => {
    const amount = values.water;
    const newWater = { amount, time };
    dispatch(addWater(newWater)).then(() => {
      setWaterValue(0);
      setStartDate(new Date());
      actions.resetForm();
    });
    close(close);
  };

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
    <BodyModal>
      <Formik
        initialValues={{ water: waterValue }}
        onSubmit={onSubmit}
        validationSchema={waterValidationSchema}
      >
        {({ values, setFieldValue }) => (
          <Form>
            <WraperTitel>
              <TilelAddWater>Add water</TilelAddWater>
            </WraperTitel>
            <ChoWal>Choose a value:</ChoWal>
            <AmoWate>Amount of water:</AmoWate>
            <WrapValue>
              <ButValue
                type="button"
                onClick={() => {
                  let newValue;
                  if (waterValue >= 50) {
                    const roundedValue = Math.floor((waterValue - 1) / 50) * 50;
                    newValue = Math.max(roundedValue, 0);
                  } else {
                    newValue = 0;
                  }
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
                  let newValue;
                  if (waterValue % 50 === 0) {
                    newValue = waterValue + 50;
                  } else {
                    newValue = Math.ceil(waterValue / 50) * 50;
                  }
                  newValue = Math.min(newValue, 999);
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
  );
};
