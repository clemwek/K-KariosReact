import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Routes from './routes';

injectTapEventPlugin();

export default () => (
  <MuiThemeProvider >
    <Routes />
  </MuiThemeProvider >
);
