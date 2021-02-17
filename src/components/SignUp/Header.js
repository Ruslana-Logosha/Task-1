import React from 'react';
import Box from '../StoryBook/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  typographyStyle: {
    fontWeight: '700',
    fontSize: '32px',
    fontStyle: 'normal',
    lineHeight: '1.17',
  },
});

export default function Header() {
  const styles = useStyles();

  return (
    <Box display="flex" flexDirection="column">
      <Typography className={styles.typographyStyle}>
        Sign up to set your brand app for success
      </Typography>
    </Box>
  );
}
