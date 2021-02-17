import { TextField } from '@material-ui/core';
import React, { forwardRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    width: '550px',
    height: '50px',
    backgroundColor: '#EFEFEF',
    borderRadius: '6px',
    margin: theme.spacing(3),
    '& label.Mui-focused': {
      color: '#6D9B12',
    },
    '& label.Mui-error': {
      color: '#FF0000',
    },
  },
}));

const Input = forwardRef((props, ref) => {
  const styles = useStyles();

  return (
    <TextField
      className={styles.root}
      variant="outlined"
      margin="normal"
      inputRef={ref}
      fullWidth
      {...props}
    />
  );
});

export default Input;
