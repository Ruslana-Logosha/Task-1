import React from 'react';
import Box from './Box';
import Buttons from './Buttons';
import TextFields from './TextFields';
import Titles from './Typography';

export default function StoryBook() {
  return (
    <Box>
      <p>Buttons</p>
      <Buttons />
      <p>TextFields</p>
      <TextFields />
      <p>Typography</p>
      <Titles />
    </Box>
  );
}
