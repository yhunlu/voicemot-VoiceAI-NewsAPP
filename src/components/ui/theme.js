import { createTheme } from '@mui/material';

const colorprimary = '#48c5448c';
const colorsecondary = '#000000';
const color1 = '#2fb45a';
const color2 = '#47ff82'

const theme = createTheme({
  palette: {
    primary: {
      main: colorprimary,
    },
    secondary: {
      main: colorsecondary,
    },
    common: {
      logotext: color1,
      logotext2: color2,
    },
  },
  overrides: {},
});

export default theme;
