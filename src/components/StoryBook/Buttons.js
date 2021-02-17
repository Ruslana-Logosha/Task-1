import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Box from './Box';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(2),
    width: '133px',
    heigth: '50px',
  },
  containedSizeLarge: {
    margin: theme.spacing(2),
    width: '270px',
    heigth: '50px',
  },

  containedSizeSmall: {
    margin: theme.spacing(2),
    width: '120px',
    heigth: '40px',
  },

  label: {
    fontSize: '16px',
    fontWeith: '900',
    lineHeight: '1.17',
  },
}));

export default function Buttons() {
  const styles = useStyles();

  return (
    <>
      <Box display="flex" flexDirection="row">
        <Button
          className={styles.containedSizeLarge}
          variant="contained"
          color="primary"
        >
          <span className={styles.label}> Sign up</span>
        </Button>
        <Button
          className={styles.root}
          width="133px"
          heigth="50px"
          variant="contained"
          color="primary"
        >
          <span className={styles.label}> Sign up</span>
        </Button>
        <Button
          className={styles.containedSizeSmall}
          variant="contained"
          color="primary"
        >
          <span className={styles.label}> Sign up</span>
        </Button>
      </Box>
      <Box display="flex" flexDirection="row">
        <Button
          className={styles.containedSizeLarge}
          variant="contained"
          color="secondary"
        >
          <span className={styles.label}> Sign up</span>
        </Button>
        <Button
          className={styles.root}
          size="medium"
          variant="contained"
          color="secondary"
        >
          <span className={styles.label}> Sign up</span>
        </Button>
        <Button
          className={styles.containedSizeSmall}
          variant="contained"
          color="secondary"
        >
          <span className={styles.label}> Sign up</span>
        </Button>
      </Box>
      <Box display="flex" flexDirection="row">
        <Button
          className={styles.containedSizeLarge}
          variant="contained"
          color="default"
        >
          <span className={styles.label}> Sign up</span>
        </Button>
        <Button
          className={styles.root}
          size="medium"
          variant="contained"
          color="default"
        >
          <span className={styles.label}> Sign up</span>
        </Button>
        <Button
          className={styles.containedSizeSmall}
          variant="contained"
          color="default"
        >
          <span className={styles.label}> Sign up</span>
        </Button>
      </Box>
    </>
  );
}
