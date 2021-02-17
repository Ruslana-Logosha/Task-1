import React from 'react';
import Box from '../StoryBook/Box';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import VpnKeySharpIcon from '@material-ui/icons/VpnKeySharp';
import { SVGIconGoogle, SVGIconMicrosoft } from './SVGIcons';

const useStyles = makeStyles(theme => ({
  containedSizeLarge: {
    marginBottom: theme.spacing(2),
    width: '270px',
    heigth: '50px',
    '& .MuiSvgIcon-root': {
      marginTop: '5px',
    },
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
    <Box display="flex" flexDirection="row" justifyContent="space-between">
      <Button
        startIcon={<SVGIconGoogle />}
        className={styles.containedSizeLarge}
        variant="contained"
        color="secondary"
      >
        <span className={styles.label}> Sign up with Google</span>
      </Button>
      <Button
        startIcon={<SVGIconMicrosoft />}
        className={styles.containedSizeLarge}
        variant="contained"
        color="default"
      >
        <span className={styles.label}> Sign up with Microsoft</span>
      </Button>
    </Box>
  );
}
