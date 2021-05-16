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
import Transaction from '../pages/TransactionFlow/Transaction';
import ConfirmTransaction from '../pages/TransactionFlow/ConfirmTransaction';
import TransactionAproved from '../pages/TransactionFlow/TransactionAproved';
import Deposit from '../pages/Deposit';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={PreLoginPage} />
    <Route path="/home" component={Home} />
    <Route path="/loginPage" exact component={LoginPage} />
    <Route path="/registrationPage" exact component={RegistrationPage} />
    <Route path="/listchampionship" exact component={ListChampionships} />
    <Route path="/championship/details" exact component={ChampionshipDetails} />
    <Route path="/extract" exact component={ListExtract} />
    <Route path="/contacts" exact component={ListContacts} />
    <Route path="/recover" exact component={RecoverPassword} />
    <Route path="/recoverconfirm" exact component={RecoverPasswordConfirm} />
    <Route path="/transaction" exact component={Transaction} />
    <Route path="/confirmtransaction" exact component={ConfirmTransaction} />
    <Route path="/transactionaproved" exact component={TransactionAproved} />
    <Route path="/deposit" exact component={Deposit} />
  </Switch>
);

export default Routes;
