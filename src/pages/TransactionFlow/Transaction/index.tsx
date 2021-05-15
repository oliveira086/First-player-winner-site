import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../../../components/atoms/Button';
import BalanceHeader from '../../../components/molecules/BalanceHeader';
import Header from '../../../components/molecules/Header';

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

const InputContainer = styled.div`
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
  const [cash, setCash] = useState(0);

  function handleChangeCash(e: React.ChangeEvent<HTMLInputElement>) {
    const num = Number(e.target.value);
    if (num >= 0) {
      setCash(() => Number(num.toFixed(2)));
    }
  }

  return (
    <Container>
      <Header />
      <span>
        Quanto você deseja transferir para André Luis da Silva Oliveira?
      </span>

      <InputContainer>
        <div className="content">
          R${' '}
          <input
            type="number"
            value={String(cash)}
            pattern="[0-9]*"
            onChange={handleChangeCash}
          />
        </div>
        <BalanceHeader salt="120" />
      </InputContainer>

      <Button statusType="confirmation">Continuar</Button>
    </Container>
  );
};

export default Transaction;
