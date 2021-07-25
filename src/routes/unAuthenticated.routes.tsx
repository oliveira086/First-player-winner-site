import React from 'react';

import { Switch, Route } from 'react-router-dom';

import AuthPage from '../pages/Auth';
import PreLoginPage from '../pages/PreLoginPage';

const UnauthenticatedRoutes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={PreLoginPage} />
    <Route path="/auth" component={AuthPage} />
  </Switch>
);

export default UnauthenticatedRoutes;
