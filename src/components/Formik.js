import React from 'react';
import { useFormik } from 'formik'

const SignupForm = () => {
  const {
    // resetForm,
    // setValues,
    // handleReset,
    // isSubmitting,
    // errors,
    // isValid,
    // setErrors,
    // submitCount,
    // submitForm,
    handleChange,
    values: {
      firstName,
      lastName,
      email
    },
    handleSubmit
  } = useFormik({
    // state ...
    initialValues: {
      firstName: '',
      lastName: '',
      email: ''
    },
    onSubmit: (values) => {
      console.log(values);
    }
  })

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        value={firstName}
        onChange={handleChange}
      />
      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        value={lastName}
        onChange={handleChange}
      />
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        value={email}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default SignupForm
