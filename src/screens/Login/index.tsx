import React from 'react';
import Screen from './screen';
import { Formik, Field, Form, FormikActions } from 'formik';
interface Values {
  password: string;
  email: string;
}

const LoginScreen: React.FC = props => {
  return (
    <Formik
      initialValues={{
        password: '',
        email: '',
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

export default LoginScreen;
