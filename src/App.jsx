import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux';
import store from './store/store';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Routes from './routes';

injectTapEventPlugin();

export default () => (
  <Provider store={store}>
    <MuiThemeProvider >
      <Routes />
    </MuiThemeProvider >
  </Provider>
);
