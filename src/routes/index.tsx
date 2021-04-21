import React from 'react';

import { Switch, Route } from 'react-router-dom';

import PreLoginPage from '../pages/PreLoginPage';
import ListChampionships from '../pages/ListChampionships';
import ListExtract from '../pages/ListExtract';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={PreLoginPage} />
    <Route path="/listchampionship" exact component={ListChampionships} />
    <Route path="/extract" exact component={ListExtract} />
  </Switch>
);

export default Routes;
