import React from 'react';
import { Formik, Field, Form, FormikActions } from 'formik';

const Screen: React.FC<{}> = props => {
  return (
    <Form>
      <label htmlFor="firstName">FirstName</label>
      <Field id="firstName" name="firstName" placeholder="john" type="text" />

      <label htmlFor="lastName">LastName</label>
      <Field id="lastName" name="lastName" placeholder="john Doe" type="text" />

      <label htmlFor="email">Email</label>
      <Field id="email" name="email" placeholder="john@acme.com" type="email" />

      <label htmlFor="password">Password</label>
      <Field
        id="password"
        name="password"
        placeholder="password"
        type="password"
        required
      />

      <button type="submit" style={{ display: 'block' }}>
        Submit
      </button>
    </Form>
  );
};

export default Screen;
