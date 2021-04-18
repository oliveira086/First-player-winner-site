import React from 'react';

import { Switch, Route } from 'react-router-dom';

import PreLoginPage from '../pages/PreLoginPage';
import ListChampionships from '../pages/ListChampionships';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={PreLoginPage} />
    <Route path="/listchampionship" exact component={ListChampionships} />
  </Switch>
);

export default Routes;
