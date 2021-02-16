import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Box from './Box';

const useStyles = makeStyles(theme => ({
  props: {
    MuiTypography: {
      variantMapping: {
        h1: 'h2',
        h2: 'h2',
        h3: 'h2',
        h4: 'h2',
        h5: 'h2',
        h6: 'h2',
        subtitle1: 'h2',
        subtitle2: 'h2',
      },
    },
  },
  typography: {
    h2: {
      fontWeight: '900',
      fontSize: '36px',
      fontStyle: 'normal',
      lineHeight: '1.17',
    },
    h3: {
      fontWeight: '700',
      fontSize: '32px',
      fontStyle: 'normal',
      lineHeight: '1.17',
    },
    h4: {
      fontWeight: '500',
      fontSize: '28px',
      fontStyle: 'normal',
      lineHeight: '1.17',
    },
    h5: {
      fontWeight: '500',
      fontSize: '24px',
      fontStyle: 'normal',
      lineHeight: '1.17',
    },
    h6: {
      fontWeight: '500',
      fontSize: '18px',
      fontStyle: 'normal',
      lineHeight: '1.17',
    },
    subtitle1: {
      fontWeight: '700',
      fontSize: '16px',
      fontStyle: 'normal',
      lineHeight: '1.17',
    },
    subtitle2: {
      fontWeight: '700',
      fontSize: '14px',
      fontStyle: 'normal',
      lineHeight: '1.17',
    },
    body1: {
      fontWeight: '300',
      fontSize: '14px',
      fontStyle: 'normal',
      lineHeight: '1.17',
    },
  },
}));
export default function Titles() {
  const styles = useStyles();

  return (
    <Box dispaly="flex" flexDirection="column">
      <Typography className={styles.root} variant="h2">
        Typography
      </Typography>
      <Typography className={styles.root} variant="h3">
        Typography
      </Typography>
      <Typography className={styles.root} variant="h4">
        Typography
      </Typography>
      <Typography className={styles.root} variant="h5">
        Typography
      </Typography>
      <Typography className={styles.root} variant="h6">
        Typography
      </Typography>
      <Typography className={styles.root} variant="subtitle1">
        Typography
      </Typography>
      <Typography className={styles.root} variant="subtitle2">
        Typography
      </Typography>
      <Typography className={styles.root} variant="body1">
        Typography
      </Typography>
    </Box>
  );
}
