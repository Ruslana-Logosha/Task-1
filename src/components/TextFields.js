import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Box from './Box';

const useStyles = makeStyles(theme => ({
  root: {
    width: '550px',
    height: '50px',
    backgroundColor: '#EFEFEF',
    borderRadius: '6px',
    margin: theme.spacing(2),
    '& label.Mui-focused': {
      color: '#6D9B12',
    },
    '& label.Mui-error': {
      color: '#FF0000',
    },
  },
}));

export default function TextFields() {
  const styles = useStyles();

  return (
    <Box display="flex" flexDirection="column">
      <span>Default</span>
      <TextField
        className={styles.root}
        label="Full Name"
        placeholder="Placeholder"
        variant="outlined"
      />
      <span>Active</span>
      <TextField
        className={styles.root}
        label="Email Address"
        placeholder="Placeholder"
        variant="outlined"
      />
      <span>Error</span>
      <TextField
        className={styles.root}
        label="Email Address"
        placeholder="Placeholder"
        variant="outlined"
        error
        helperText="Please input your password! The password must be at least 8
          characters!"
      />
    </Box>
  );
}
