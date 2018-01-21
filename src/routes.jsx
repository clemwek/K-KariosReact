import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import WelcomePage from './components/home/welcome/welcome';
import MenuAppBar from './components/common/navbar/navbar';
import StaffPage from './components/admin/staff/staff';
import AdminPage from './components/admin/admin/admin';

export default () => (
  <BrowserRouter>
    <div>
      <Route component={MenuAppBar} />
      <Route exact path="/" component={WelcomePage} />
      <Route exact path="/staff" component={StaffPage} />
      <Route exact path="/admin" component={AdminPage} />
    </div>
  </BrowserRouter>
);
