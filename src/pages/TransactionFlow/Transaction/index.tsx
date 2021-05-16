import React, { useState } from 'react';
import CurrencyInput from 'react-currency-input-field';

import Button from '../../../components/atoms/Button';
import BalanceHeader from '../../../components/molecules/BalanceHeader';
import Header from '../../../components/molecules/Header';
import { Container, InputContainer } from './styles';

const Transaction: React.FC = () => {
  const [cash, setCash] = useState('0');
  const [balance] = useState(120.0);
  const [color, setColor] = useState(0);

  function handleChangeCash(e: string | undefined) {
    const num = Number(e?.replace('.', '').replace(',', '.'));
    if (num > 0) {
      setColor(1);
    } else {
      setColor(0);
    }
    if (num > balance) {
      setColor(2);
    }
    setCash(e || '');
  }

  return (
    <Container>
      <Header />
      <span>
        Quanto você deseja transferir para André Luis da Silva Oliveira?
      </span>

      <InputContainer borderColor={color}>
        <div className="content">
          R$
          <CurrencyInput
            value={cash}
            decimalSeparator=","
            groupSeparator="."
            decimalsLimit={2}
            onValueChange={handleChangeCash}
            allowNegativeValue={false}
          />
        </div>
        <BalanceHeader balance={String(balance.toFixed(2)).replace('.', ',')} />
      </InputContainer>

      <Button statusType="confirmation">Continuar</Button>
    </Container>
  );
};

export default Transaction;
