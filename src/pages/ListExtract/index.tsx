import React from 'react';
import styled from 'styled-components';
import Header from '../../components/molecules/Header';

import cashBack from '../../assets/icons/cashback.svg';

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

const BalanceHeader = styled.div`
  width: 80%;
  font-size: 14px;
`;

const Strong = styled.strong`
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 30px;
`;

const Icon = styled.img`
  margin-right: 9px;
`;

const Card = styled.div`
  width: 100px;
  height: 60px;
  border-radius: 5px;
  background-color: rgba(210, 209, 211, 0.6);
`;

const ListExtract: React.FC = () => {
  return (
    <Container>
      <Header />
      <BalanceHeader>
        <Icon src={cashBack} alt="cash" />
        Saldo disponível
        <br />
        <Strong>$ 100,00</Strong>
      </BalanceHeader>
      <Card />
      <Hr />
    </Container>
  );
};

export default ListExtract;
