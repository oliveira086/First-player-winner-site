import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import PreLoginPage from './pages/PreLoginPage';
import LoginPage from './pages/LoginPage';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={PreLoginPage}/>
        <Route path='/login' exact component={LoginPage}/>
      </Switch>
    </BrowserRouter>
  )
}