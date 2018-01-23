import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux';
import store from './store/store';
import injectTapEventPlugin from 'react-tap-event-plugin';

import { init as firebaseInit } from './store/firebase';

import Routes from './routes';

injectTapEventPlugin();

export default class App extends Component {
  constructor(props) {
    super(props);
    firebaseInit();
  }

  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider >
          <Routes />
        </MuiThemeProvider >
      </Provider>
    );
  }
}
