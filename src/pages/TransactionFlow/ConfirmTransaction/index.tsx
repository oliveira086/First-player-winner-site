import React from 'react';
import Button from '../../../components/atoms/Button';
import Header from '../../../components/molecules/Header';
import { ButtonContainer, Container, Input, InputContainer } from './styles';

const ConfirmTransaction: React.FC = () => {
  return (
    <Container>
      <Header />
      <span>
        Digite sua senha <br />
        de confirmação
      </span>
      <InputContainer>
        <Input
          type="password"
          maxLength={4}
          pattern="[0-9]*"
          inputMode="numeric"
        />
        <a href="#1">Recuperar senha</a>
      </InputContainer>
      <ButtonContainer>
        <Button statusType="confirmation">Confirmar</Button>
        <Button statusType="cancel">Cancelar</Button>
      </ButtonContainer>
    </Container>
  );
};

export default ConfirmTransaction;
