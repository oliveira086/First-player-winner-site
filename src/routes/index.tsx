import React from 'react';

import { Switch, Route } from 'react-router-dom';

import PreLoginPage from '../pages/PreLoginPage';
import LoginPage from '../pages/LoginPage';
import RegistrationPage from '../pages/RegistrationPage';
import ListChampionships from '../pages/ListChampionships';
import Home from '../pages/Home';
import ListExtract from '../pages/ListExtract';
import ListContacts from '../pages/ListContacts';
import ChampionshipDetails from '../pages/ChampionshipsDetails';
import RecoverPassword from '../pages/RecoverPassword';
import RecoverPasswordConfirm from '../pages/RecoverPasswordConfirm';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={PreLoginPage} />
    <Route path="/home" component={Home} />
    <Route path="/login" exact component={LoginPage} />
    <Route path="/register" exact component={RegistrationPage} />
    <Route path="/championship" exact component={ListChampionships} />
    <Route path="/championship/details" exact component={ChampionshipDetails} />
    <Route path="/extract" exact component={ListExtract} />
    <Route path="/contacts" exact component={ListContacts} />
    <Route path="/password/recover" exact component={RecoverPassword} />
    <Route
      path="/password/confirmation"
      exact
      component={RecoverPasswordConfirm}
    />
  </Switch>
);

export default Routes;
