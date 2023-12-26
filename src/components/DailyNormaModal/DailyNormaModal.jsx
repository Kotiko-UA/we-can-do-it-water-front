<<<<<<< Updated upstream
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
=======

import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
// import {ModalContainer, ModalContent} from './DailyNormaModal.js'
>>>>>>> Stashed changes


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

const normaForGirl = (values) => {
    return (values.weight * 0.03) + (values.time * 0.4);
  };
  const normaForMan = (values) => {
    return (values.weight * 0.04) + (values.time * 0.6);
  };

export const DailyNormaModal = () => {

    const dailyNormaCounter = (values) =>
    values.picked === 'For girl' ? normaForGirl(values).toFixed(1) :
    values.picked === 'For man' ? normaForMan(values).toFixed(1) :
    0;

  return (
    <div>
      <div>
        <h1>My daily norma</h1>
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
            <Form>
              <h2>Calculate your rate:</h2>
              {/* <div id="my-radio-group">Picked</div> */}
              <div role="group" aria-labelledby="my-radio-group">
                <label>
                  <Field type="radio" name="picked" value="For girl" />
                  For girl
                </label>
                <label>
                  <Field type="radio" name="picked" value="For man" />
                  For man
                </label>
                {/* <div>Picked: {values.picked}</div> */}
              </div>
  
              <div>
                <label>
                  Your weight in kilograms:
                  <Field id="weight" name="weight" type="number" />
                  <ErrorMessage name='weight' component='div'/>
                </label>
                <label>
                  The time of active participation in sports or other activities
                  with a high physical load:
                  <Field id="time " name="time" type="number" />
                  <ErrorMessage name='time' component='div'/>
                </label>
              </div>
  
              <p>The required amount of water in liters per day:{dailyNormaCounter(values)} </p>
            
  
              <label>
                Write down how much water you will drink:
                <Field id="drink " name="drink" type="number" />
                <ErrorMessage name='drink' component='div'/>
              </label>
  
              <button type="submit">Save</button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
