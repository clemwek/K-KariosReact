import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import WelcomePage from './components/home/welcome/welcome';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={WelcomePage} />
    </Switch>
  </BrowserRouter>
);
