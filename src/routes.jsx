import React from 'react';
import { Route, IndexRouter } from 'react-router';
import App from './App';

export default (
  <Route path="/" component={App}>
    <IndexRouter component={HomePage} />
  </Route>
);
