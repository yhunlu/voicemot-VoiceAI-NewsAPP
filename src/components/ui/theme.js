import { createTheme } from '@mui/material';

const colorprimary = '#3b3b3b';
const colorsecondary = '#000000';

const theme = createTheme({
  palette: {
    primary: {
      main: colorprimary,
    },
    secondary: {
      main: colorsecondary,
    },
  },
  typography: {
    h1: {
      fontSize: '3.5rem',
      fontFamily: 'Philosopher',
      fontStyle: 'italic',
      fontWeight: 700,
      color: colorprimary,
    },
    h2: {
      fontFamily: 'Montserrat',
      fontSize: '3rem',
      fontWeight: 500,
      color: '#fff',
    },
    h3: {
      fontFamily: 'Montserrat',
      fontSize: '2rem',
      fontWeight: 300,
      color: colorprimary,
    },
    h4: {
      fontFamily: 'Philosopher',
      fontStyle: 'italic',
      fontWeight: 700,
      fontSize: '3rem',
      color: '#fff',
    },
    h5: {
      fontFamily: 'Philosopher',
      fontSize: '2rem',
      fontWeight: 700,
      fontStyle: 'italic',
      color: '#fff',
    },
    h6: {
      fontFamily: 'Philosopher',
      fontSize: '2rem',
      fontWeight: 700,
      fontStyle: 'italic',
      color: '#fff',
    },
    body1: {
      fontFamily: 'Montserrat',
      fontSize: '1.5rem',
    },
    body2: {
      fontFamily: 'Montserrat',
      fontSize: '1.5rem',
    },
  },
  overrides: {},
});

export default theme;
