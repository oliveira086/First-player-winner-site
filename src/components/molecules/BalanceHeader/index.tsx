import React from 'react';
import cashBack from '../../../assets/icons/cashback.svg';
import { BalanceContainer, Icon, Strong } from './styles';

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
