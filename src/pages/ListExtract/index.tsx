import React from 'react';
import styled from 'styled-components';
import { AiFillBank } from 'react-icons/ai';
import { GrTransaction } from 'react-icons/gr';
import { RiMoneyDollarCircleFill } from 'react-icons/ri';

import Header from '../../components/molecules/Header';
import Transaction from '../../components/atoms/Transaction';
import BalanceHeader from '../../components/molecules/BalanceHeader';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f7f7f7;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Hr = styled.hr`
  width: 100%;
`;

const CardContainer = styled.div`
  display: flex;
  width: 100vw;
  margin-bottom: 10px;
  margin-top: 30px;
  padding-left: 30px;
  flex-direction: row;
  scrollbar-color: transparent transparent;
  overflow-x: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 9px;
  padding-top: 12px;
  flex: none;
  width: 100px;
  height: 60px;
  border-radius: 5px;
  margin-right: 20px;
  background-color: rgba(210, 209, 211, 0.6);
  color: #020c28;
  font-size: 12px;
  line-height: 10px;
  font-weight: 500;
  justify-content: space-between;
  /* -webkit-touch-callout: none; iPhone OS, Safari */
  -webkit-user-select: none; /* Chrome, Safari 3 */
  -khtml-user-select: none; /* Safari 2 */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+ */
  user-select: none;
  :active {
    background-color: rgba(224, 224, 224, 0.6);
  }
`;

const TransactionContainer = styled.div`
  width: 100%;
  padding-left: 30px;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const ListExtract: React.FC = () => {
  return (
    <Container>
      <Header />
      <BalanceHeader salt="130,95" />
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
