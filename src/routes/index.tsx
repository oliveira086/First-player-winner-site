import React from 'react';

import { Switch, Route } from 'react-router-dom';

import AuthPage from '../pages/Auth';
import PreLoginPage from '../pages/PreLoginPage';
import ListChampionships from '../pages/ListChampionships';
import Home from '../pages/Home';
import ListExtract from '../pages/ListExtract';
import ListContacts from '../pages/ListContacts';
import ChampionshipDetails from '../pages/ChampionshipsDetails';
import RecoverPassword from '../pages/RecoverPassword';
import Transaction from '../pages/TransactionFlow/Transaction';
import ConfirmTransaction from '../pages/TransactionFlow/ConfirmTransaction';
import TransactionAproved from '../pages/TransactionFlow/TransactionAproved';
import Deposit from '../pages/Deposit';
import UpdateProfile from '../pages/UpdateProfile';
import More from '../pages/More';
import Bets from '../pages/Bets';
import Profile from '../pages/Profile';
import CreateChampionship from '../pages/CreateChampioship';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={PreLoginPage} />
    <Route path="/home" component={Home} />
    <Route path="/auth" component={AuthPage} />
    <Route path="/profile" exact component={Profile} />
    <Route path="/profile/update" component={UpdateProfile} />
    <Route path="/championship" exact component={ListChampionships} />
    <Route path="/championship/details" component={ChampionshipDetails} />
    <Route path="/extract" component={ListExtract} />
    <Route path="/contacts" component={ListContacts} />
    <Route path="/password/recover" component={RecoverPassword} />
    <Route path="/transaction" component={Transaction} />
    <Route path="/confirmtransaction" component={ConfirmTransaction} />
    <Route path="/transactionaproved" component={TransactionAproved} />
    <Route path="/deposit" component={Deposit} />
    <Route path="/more" component={More} />
    <Route path="/bets" component={Bets} />
    <Route path="/createchampionship" component={CreateChampionship} />
  </Switch>
);

export default Routes;
