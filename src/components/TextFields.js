import React from 'react';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
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
    // '& .Mui-focused': {
    //   border: '1px solid #6D9B12',
    // },
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
      <FormControl className={styles.root} variant="outlined" error>
        <InputLabel htmlFor="component-error">Password</InputLabel>
        <Input />
        <FormHelperText id="component-error-text">
          Please input your password! The password must be at least 8
          characters!
        </FormHelperText>
      </FormControl>
    </Box>
  );
}
