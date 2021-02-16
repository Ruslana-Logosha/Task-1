import { createMuiTheme } from '@material-ui/core';
// import Roboto from 'css/roboto/roboto-fontface.css';

const colors = {
  green: '#6D9B12',
  blue: '#4285F4',
  grey: '#E5E5E5',
  white: '#FFFFFF',
  greyText: '#636363',
};

// const defaultTheme = createMuiTheme();

const theme = createMuiTheme({
  palette: {
    primary: {
      main: colors.green,
      contrastText: colors.white,
    },
    secondary: {
      main: colors.blue,
      contrastText: colors.white,
    },
    default: {
      main: colors.grey,
      contrastText: colors.greyText,
    },
  },
  typography: {
    fontFamily: 'Roboto',
  },
});

export default theme;
