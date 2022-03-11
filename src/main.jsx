import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import theme from './components/ui/theme';
import { ThemeProvider } from '@mui/styles';


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
