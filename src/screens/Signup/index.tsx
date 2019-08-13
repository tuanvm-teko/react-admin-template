import React from 'react';
import Screen from './screen';
import { Formik, FormikActions } from 'formik';
interface Values {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const SignupScreen: React.FC = props => {
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      }}
      onSubmit={(values: Values, { setSubmitting }: FormikActions<Values>) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 500);
      }}
      render={() => <Screen />}
    />
  );
};

export default SignupScreen;
