import React from 'react';
import { useState } from 'react';
import FormContainer from './FormContainer';
import Input from './FormInput';
import FormSignUpButton from './FormSignUpButton';
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
        .required('Required'),
      email: Yup.string().email('Invalid email').required('Required'),
      password: Yup.string()
        .min(6, 'Password should be longer than 6 characters')
        .required(),
    }),
    onSubmit: ({ fullName, email, password }) => {
      console.log(
        `Full Name: ${fullName}, email: ${email}, password: ${password}`,
      );
    },
  });

  return (
    <FormContainer onSubmit={handleSubmit}>
      <label htmlFor="fullName">Login</label>
      <Input
        value={values.fullName}
        onChange={handleChange}
        onBlur={handleBlur}
        id="fullName"
        name="fullName"
        type="text"
        placeholder="placeholder"
      />
      {touched.fullName && errors.fullName ? (
        <div>{errors.fullName}</div>
      ) : null}

      <label htmlFor="email">Email Address</label>
      <Input
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        id="email"
        name="email"
        type="text"
        placeholder="placeholder"
      />
      {touched.email && errors.email ? <div>{errors.email}</div> : null}

      <Input
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        id="password"
        name="password"
        // type="text"
        placeholder="placeholder"
        type={showPassword ? 'text' : 'password'}
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
      {touched.password && errors.password ? (
        <div>{errors.password}</div>
      ) : null}
      <FormSignUpButton type="submit">Log in</FormSignUpButton>
    </FormContainer>
  );
};

export default Form;
