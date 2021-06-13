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

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={PreLoginPage} />
    <Route path="/home" component={Home} />
    <Route path="/auth" component={AuthPage} />
    <Route path="/championship" component={ListChampionships} />
    <Route path="/championship/details" component={ChampionshipDetails} />
    <Route path="/extract" component={ListExtract} />
    <Route path="/contacts" component={ListContacts} />
    <Route path="/password/recover" component={RecoverPassword} />
    <Route path="/transaction" component={Transaction} />
    <Route path="/confirmtransaction" component={ConfirmTransaction} />
    <Route path="/transactionaproved" component={TransactionAproved} />
    <Route path="/deposit" component={Deposit} />
  </Switch>
);

export default Routes;
