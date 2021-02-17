import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    width: '550px',
    marginTop: theme.spacing(1),
  },
}));

const FormContainer = ({ children, ...props }) => {
  const styles = useStyles();
  return (
    <form className={styles.root} {...props}>
      {children}
    </form>
  );
};

export default FormContainer;
