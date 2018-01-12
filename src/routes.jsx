import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import WelcomePage from './components/home/welcome/welcome';
import MenuAppBar from './components/common/navbar/navbar';
import StaffPage from './components/admin/staff/staff';

export default () => (
  <BrowserRouter>
    <div>
      <Route component={MenuAppBar} />
      <Route exact path="/" component={WelcomePage} />
      <Route exact path="/staff" component={StaffPage} />
      <Route exact path="/admin" render={() => <h1>This is the admin page.</h1>} />
    </div>
  </BrowserRouter>
);
