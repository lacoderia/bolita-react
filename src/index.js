import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { MuiThemeProvider } from '@material-ui/core/styles';
import App from './app';

render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'));

