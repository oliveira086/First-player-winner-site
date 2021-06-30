import React, { useState, useCallback } from 'react';
import CurrencyInput from 'react-currency-input-field';
import { useHistory } from 'react-router-dom';

import Button from '../../components/atoms/Button';
import BalanceHeader from '../../components/molecules/BalanceHeader';
import Header from '../../components/molecules/Header';

import successImage from '../../assets/imgs/success.png';
import errorImage from '../../assets/imgs/error.png';

import {
  Container,
  InputContainer,
  PasswordInputContainer,
  Input,
  ButtonContainer,
  ImageContainer,
} from './styles';

const NewTransaction: React.FC = () => {
  const [transactionStarted, setTransactionStarted] = useState(false);
  const [transactionResponse, setTransactionResponse] = useState<
    'success' | 'error' | undefined
  >(undefined);

  const [cash, setCash] = useState('0');
  const [balance] = useState(120.0);
  const [color, setColor] = useState(0);
  const { goBack } = useHistory();

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

  const resetTransaction = useCallback(() => {
    setTransactionResponse(undefined);
    setTransactionStarted(false);
  }, []);

  const ConfirmationContent: React.FC = () => (
    <>
      <span>Digite sua senha de confirmação</span>
      <PasswordInputContainer>
        <Input
          type="password"
          maxLength={4}
          pattern="[0-9]*"
          inputMode="numeric"
        />
        <a href="#1">Recuperar senha</a>
      </PasswordInputContainer>
      <ButtonContainer>
        <Button
          statusType="confirmation"
          onClick={() => {
            setTransactionResponse('success');
          }}
        >
          Confirmar
        </Button>
        <Button statusType="cancel" onClick={() => goBack()}>
          Cancelar
        </Button>
      </ButtonContainer>
    </>
  );

  const TransactionResponseContent: React.FC = () => (
    <>
      <ImageContainer>
        {transactionResponse === 'success' ? (
          <>
            <span>Transferência concluída!</span>

            <img src={successImage} alt="Transaction with success" />
          </>
        ) : (
          <>
            <span>Ops, houve algum problema!</span>
            <img src={errorImage} alt="Transaction with error" />
          </>
        )}
      </ImageContainer>
      {transactionResponse === 'error' && (
        <span>Não foi possível completar a transferência</span>
      )}
      <ButtonContainer>
        <Button
          statusType="confirmation"
          onClick={() => {
            if (transactionResponse === 'success') {
              return goBack();
            }
            return resetTransaction();
          }}
        >
          {transactionResponse === 'success'
            ? 'Nova transferência'
            : 'Tentar novamente'}
        </Button>
        <Button statusType="cancel" onClick={() => goBack()}>
          Cancelar
        </Button>
      </ButtonContainer>
    </>
  );

  return (
    <Container>
      <Header />

      {transactionStarted ? (
        <>
          {!transactionResponse ? (
            <ConfirmationContent />
          ) : (
            <TransactionResponseContent />
          )}
        </>
      ) : (
        <>
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
            <section>
              <BalanceHeader
                balance={String(balance.toFixed(2)).replace('.', ',')}
              />
            </section>
          </InputContainer>

          <Button
            onClick={() => setTransactionStarted(true)}
            statusType="confirmation"
          >
            Continuar
          </Button>
        </>
      )}
    </Container>
  );
};

export default NewTransaction;
