import Box from '../StoryBook/Box';

import React from 'react';
import Header from './Header';
import SignUpButtons from './SignUpButtons';
import Form from './Form';

export default function SignUp() {
  return (
    <Box width="550px" margin="auto">
      <Header />
      <SignUpButtons />
      <Form />
    </Box>
  );
}
