import React from 'react';
import Box from '../StoryBook/Box';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import VpnKeySharpIcon from '@material-ui/icons/VpnKeySharp';

const useStyles = makeStyles(theme => ({
  containedSizeLarge: {
    margin: theme.spacing(2),
    width: '270px',
    heigth: '50px',
  },
  label: {
    fontSize: '16px',
    fontWeith: '900',
    lineHeight: '1.17',
  },
}));

export default function SignUpButtons() {
  const styles = useStyles();

  return (
    <Box display="flex" flexDirection="row">
      <Button
        startIcon={<VpnKeySharpIcon />}
        className={styles.containedSizeLarge}
        variant="contained"
        color="secondary"
      >
        <span className={styles.label}> Sign up with Google</span>
      </Button>
      <Button
        startIcon={<VpnKeySharpIcon />}
        className={styles.containedSizeLarge}
        variant="contained"
        color="default"
      >
        <span className={styles.label}> Sign up with Microsoft</span>
      </Button>
    </Box>
  );
}
