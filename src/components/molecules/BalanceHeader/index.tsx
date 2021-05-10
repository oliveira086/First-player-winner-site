import React from 'react';
import styled from 'styled-components';
import cashBack from '../../../assets/icons/cashback.svg';

const BalanceContainer = styled.div`
  width: 100vw;
  padding-left: 30px;
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

interface BalanceProps {
  salt: string;
}

const BalanceHeader: React.FC<BalanceProps> = ({ salt }) => {
  return (
    <BalanceContainer>
      <Icon src={cashBack} alt="cash" />
      Saldo disponível
      <br />
      <Strong>$ {salt}</Strong>
    </BalanceContainer>
  );
};

export default BalanceHeader;
