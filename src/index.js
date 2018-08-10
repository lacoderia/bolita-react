import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import App from './app';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#ffb333',
      main: '#ffa000',
      dark: '#b27000',
      contrastText: '#fff',
    },
    secondary: {
      light: '#33bfff',
      main: '#00b0ff',
      dark: '#007bb2',
      contrastText: '#fff',
    },
    background: {
      default: "#E9EBEE"
    }
  },
  overrides: {
    MuiButton: {
      outlined: {
        borderColor: '#ffb300',
      }
    },
    MuiFormControl: {
      root: {
        width: '100%',
      }
    }
  },
});

render(
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root'));

