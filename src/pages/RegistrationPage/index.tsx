import React from 'react';

import {
  Container,
  MiddleContainer,
  BottomContainer,
  InputContainer,
  FraseCadastroContainer,
  FraseCadastro,
} from './styles';

import Button from '../../components/atoms/Button';
import Input from '../../components/atoms/Input';
import HeaderLogin from '../../components/molecules/HeaderLogin';

const LoginPage: React.FC = () => {
  return (
    <Container>
      <HeaderLogin />
      <MiddleContainer>
        <FraseCadastroContainer>
          <FraseCadastro>Cadastre-se</FraseCadastro>
        </FraseCadastroContainer>
        <InputContainer>
          <Input title="Email" placeholder="Email" />
          <Input title="Senha" placeholder="Senha" />
          <Input title="Confirmar Senha" placeholder="Confirmar Senha" />
        </InputContainer>
      </MiddleContainer>
      <BottomContainer>
        <Button statusType="confirmation">Entrar</Button>
      </BottomContainer>
    </Container>
  );
};

export default LoginPage;
