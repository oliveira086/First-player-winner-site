import React from 'react';

import { Switch, Route } from 'react-router-dom';

import PreLoginPage from '../pages/PreLoginPage';
import LoginPage from '../pages/LoginPage';
import RegistrationPage from '../pages/RegistrationPage';
import ListChampionships from '../pages/ListChampionships';
import ChampionshipDetails from '../pages/ChampionshipsDetails';
import ListExtract from '../pages/ListExtract';
import ListContacts from '../pages/ListContacts';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={PreLoginPage} />
    <Route path="/loginPage" exact component={LoginPage} />
    <Route path="/registrationPage" exact component={RegistrationPage} />
    <Route path="/listchampionship" exact component={ListChampionships} />
    <Route path="/championship/details" exact component={ChampionshipDetails} />
    <Route path="/extract" exact component={ListExtract} />
    <Route path="/contacts" exact component={ListContacts} />
  </Switch>
);

export default Routes;
