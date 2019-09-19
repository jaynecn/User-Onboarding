import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';

function LoginForm(props) {
  return (
    <Form>
      <div>
        <Field name='name' type='text' placeholder='Name' />
      </div>
      <div>
        <Field name='email' type='email' placeholder='Email' />
      </div>
      <div>
        <Field name='password' type='password' placeholder='Password' />
      </div>
      <label>
        <Field type="checkbox" name="tos" checked={props.tos} />
        Accept TOS
      </label>
      <button type='submit'>Submit</button>
    </Form>
  );
}

const FormikLoginForm = withFormik({
  mapPropsToValues({ name, email, password, tos}) {
    return {
      name: name || '',
      email: email || '',
      password: password || '',
      tos: tos || false,
    }
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email().required('Email is required'),
    password: Yup.string().min(6, 'Password must be a least 6 characters').required('Please create a password')
  }),

})(LoginForm);

export default FormikLoginForm;