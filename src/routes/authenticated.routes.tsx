import React from 'react';

import { Switch, Route } from 'react-router-dom';

import ListChampionships from '../pages/ListChampionships';
import Home from '../pages/Home';
import ListExtract from '../pages/ListExtract';
import ListContacts from '../pages/ListContacts';
import ChampionshipDetails from '../pages/ChampionshipsDetails';
import RecoverPassword from '../pages/RecoverPassword';
import Deposit from '../pages/Deposit';
import UpdateProfile from '../pages/UpdateProfile';
import Bets from '../pages/Bets';
import Profile from '../pages/Profile';
import CreateChampionship from '../pages/CreateChampioship';
import NewTransaction from '../pages/NewTransaction';
import MenuMore from '../pages/MenuMore';

const AuthenticatedRoutes: React.FC = () => (
  <Switch>
    <Route path="/home" component={Home} />
    <Route path="/more" component={MenuMore} />
    <Route path="/profile" exact component={Profile} />
    <Route path="/profile/update" component={UpdateProfile} />
    <Route path="/championship" exact component={ListChampionships} />
    <Route path="/championship/create" component={CreateChampionship} />
    <Route path="/championship/details" component={ChampionshipDetails} />
    <Route path="/extract" component={ListExtract} />
    <Route path="/contacts" component={ListContacts} />
    <Route path="/password/recover" component={RecoverPassword} />
    <Route path="/deposit" component={Deposit} />
    <Route path="/more" component={MenuMore} />
    <Route path="/bets" component={Bets} />
    <Route path="/transaction" component={NewTransaction} />
  </Switch>
);

export default AuthenticatedRoutes;
