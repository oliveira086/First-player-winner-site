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
import UpdateProfile from '../pages/UpdateProfile';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={PreLoginPage} />
    <Route path="/home" component={Home} />
    <Route path="/loginPage" component={LoginPage} />
    <Route path="/registrationPage" component={RegistrationPage} />
    <Route path="/listchampionship" component={ListChampionships} />
    <Route path="/championship/details" component={ChampionshipDetails} />
    <Route path="/extract" component={ListExtract} />
    <Route path="/contacts" component={ListContacts} />
    <Route path="/recover" component={RecoverPassword} />
    <Route path="/recoverconfirm" component={RecoverPasswordConfirm} />
    <Route
      path="/profile"
      exact
      component={() => <h1>⚙️ Page under construction !</h1>}
    />
    <Route path="/profile/update" component={UpdateProfile} />
  </Switch>
);

export default Routes;
