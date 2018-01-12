import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import WelcomePage from './components/home/welcome/welcome';
import MenuAppBar from './components/common/navbar/navbar';

export default () => (
  <BrowserRouter>
    <div>
      <Route component={MenuAppBar} />
      <Route exact path="/" component={WelcomePage} />
      <Route exact path="/admin" render={() => <h1>This is the admin page.</h1>} />
      <Route exact path="/staff" render={() => <h1>This is the staff page.</h1>} />
    </div>
  </BrowserRouter>
);
