import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  containedSizeLarge: {
    marginTop: theme.spacing(2),
    width: '270px',
    height: '50px',
  },
  label: {
    fontFamily: 'Roboto',
    fontSize: '16px',
    fontWeight: '900',
    lineHeight: '1.17',
    textTransform: 'none',
  },
}));

const FormSignUpButton = ({ ...props }) => {
  const styles = useStyles();

  return (
    <Button
      className={styles.containedSizeLarge}
      variant="contained"
      color="primary"
      {...props}
    >
      <span className={styles.label}> Sign up </span>
    </Button>
  );
};

export default FormSignUpButton;
