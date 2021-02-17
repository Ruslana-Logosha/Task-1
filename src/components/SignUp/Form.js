import React from 'react';
import { useState } from 'react';
// import { Link } from 'react-router-dom';
import FormContainer from './FormContainer';
import Input from './FormInput';
import FormSignUpButton from './FormSignUpButton';
import CheckBox from './CheckBox';
import { InputAdornment, IconButton } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import * as Yup from 'yup';
import { useFormik } from 'formik';

const Form = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  const {
    handleSubmit,
    handleChange,
    values,
    touched,
    errors,
    handleBlur,
  } = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Full Name is required'),
      email: Yup.string().email('Invalid email').required('Email is required'),
      password: Yup.string()
        .min(6, 'Password should be longer than 6 characters')
        .required('Password is required'),
    }),
    onSubmit: ({ fullName, email, password }) => {
      console.log(
        `Full Name: ${fullName}, email: ${email}, password: ${password}`,
      );
    },
  });

  return (
    <FormContainer onSubmit={handleSubmit}>
      <label htmlFor="fullName">Full Name</label>
      <Input
        label="Full Name"
        value={values.fullName}
        onChange={handleChange}
        onBlur={handleBlur}
        id="fullName"
        name="fullName"
        type="text"
        placeholder="placeholder"
        error={touched.fullName && Boolean(errors.fullName)}
        helperText={touched.fullName && errors.fullName}
      />

      <label htmlFor="email">Email Address</label>
      <Input
        label="Email Address"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        id="email"
        name="email"
        type="text"
        placeholder="placeholder"
        error={touched.email && Boolean(errors.email)}
        helperText={touched.email && errors.email}
      />

      <label htmlFor="password">Password</label>
      <Input
        label="Password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        id="password"
        name="password"
        placeholder="placeholder"
        type={showPassword ? 'text' : 'password'}
        error={touched.password && Boolean(errors.password)}
        helperText={touched.password && errors.password}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <CheckBox />
      <FormSignUpButton type="submit">Log in</FormSignUpButton>
    </FormContainer>
  );
};

export default Form;
