import React from 'react';
import { AiFillBank } from 'react-icons/ai';
import { GrTransaction } from 'react-icons/gr';
import { RiMoneyDollarCircleFill } from 'react-icons/ri';

import Header from '../../components/molecules/Header';
import Transaction from '../../components/atoms/Transaction';
import BalanceHeader from '../../components/molecules/BalanceHeader';
import {
  Card,
  CardContainer,
  Container,
  Hr,
  TransactionContainer,
} from './styles';

const ListExtract: React.FC = () => {
  return (
    <Container>
      <Header />
      <BalanceHeader balance="130,95" />
      <CardContainer>
        <Card>
          <RiMoneyDollarCircleFill size="18px" />
          Depositar
        </Card>
        <Card>
          <GrTransaction size="18px" />
          Transferir
        </Card>
        <Card>
          <AiFillBank size="18px" />
          Saque
        </Card>
        <Card />
      </CardContainer>
      <Hr />
      <TransactionContainer>
        <Transaction
          isReceived
          name="Jose Carlos de La Cerda"
          value="40,99"
          date="Ontem"
        />
        <Transaction name="Vitor Rafael" value="30,53" date="24/01" />
        <Transaction
          isReceived
          name="Jonas Esticado"
          value="20,00"
          date="01/02"
        />
        <Transaction
          isReceived
          name="Windows Nunes"
          value="10,00"
          date="13/02"
        />
        <Transaction name="John Wich" value="15,50" date="31/12" />
      </TransactionContainer>
    </Container>
  );
};

export default ListExtract;
