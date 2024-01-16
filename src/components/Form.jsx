import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export default function Basic() {
  // Validation Schema using Yup
  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .email("Username should be an email")
      .required("Field required"),
    password: Yup.string()
      .required("Field required"),
  });

  return (
    <div>
      <h1>Sign Up</h1>
      <Formik
        initialValues={{
          username: '',
          password: ''
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          alert("Login Successful");
          setSubmitting(false);
        }}
      >
        <Form>
          <label htmlFor='username'>Username</label>
          <Field id="emailField" name="username" placeholder="name@place.com" type="email" />
          <div id="emailError">
            <ErrorMessage name="username" />
          </div>

          <label htmlFor='password'>Password</label>
          <Field id="pswField" name="password" placeholder="Password" type="password" />
          <div id="pswError">
            <ErrorMessage name="password" />
          </div>

          <button id="submitBtn" type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}
