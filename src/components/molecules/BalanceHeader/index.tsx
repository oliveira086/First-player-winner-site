import React from 'react';
import cashBack from '../../../assets/icons/cashback.svg';
import { BalanceContainer, Icon, Strong } from './styles';

interface BalanceProps {
  balance: string;
}

const BalanceHeader: React.FC<BalanceProps> = ({ balance }) => {
  return (
    <BalanceContainer>
      <Icon src={cashBack} alt="cash" />
      Saldo disponível
      <br />
      <Strong>$ {balance}</Strong>
    </BalanceContainer>
  );
};

export default BalanceHeader;
