import React, { useState } from 'react';
import styled from 'styled-components';
import CurrencyInput from 'react-currency-input-field';

import Button from '../../../components/atoms/Button';
import BalanceHeader from '../../../components/molecules/BalanceHeader';
import Header from '../../../components/molecules/Header';

interface InputProps {
  borderColor: number;
}

const values = ['#fbaf00', '#00af54', '#e80234'];

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: space-between;
  background-color: #f7f7f7;
  button {
    margin-bottom: 40px;
  }
  span {
    width: 100vw;
    font-size: 18px;
    font-weight: 600;
    line-height: 27px;
    padding: 0 30px;
  }
`;

const InputContainer = styled.div<InputProps>`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 140px;
  .content {
    width: calc(100% - 60px);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 36px;
    font-weight: 600;
    transition: 0.4s border-color ease-in;
    border-bottom: 2px solid ${props => values[props.borderColor]};
    margin-bottom: 20px;
  }
  input {
    padding-left: 6px;
    font-size: 36px;
    font-weight: 600;
    background-color: #f7f7f7;
    border: 0;
    width: 100%;
  }
`;

const Transaction: React.FC = () => {
  const [cash, setCash] = useState('0');
  const [balance, setBalance] = useState(120.0);
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
