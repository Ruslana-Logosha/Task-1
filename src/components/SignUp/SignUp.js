import { readConfigFile } from 'typescript';

import React from 'react';
import Header from './Header';
import SignUpButtons from './SignUpButtons';
import Form from './Form';

export default function SignUp() {
  return (
    <>
      <Header />
      <SignUpButtons />
      <Form />
    </>
  );
}
