import React from 'react';

import {
  Container,
  TopContainer,
  FrasesContainer,
  MiddleContainer,
  BottomContainer,
  InputContainer,
  FraseCadastroContainer,
  FraseCadastro,
  FraseAbaixo,
  FraseAcima,
  Logo,
} from './styles';

import Button from '../../components/atoms/Button';
import Input from '../../components/atoms/Input';

const LoginPage: React.FC = () => {
  return (
    <Container>
      <TopContainer>
        <FrasesContainer>
          <FraseAcima>Pronto para ser o maior vencedor?</FraseAcima>
          <FraseAbaixo>Crie sua conta e inicie sua jornada!</FraseAbaixo>
        </FrasesContainer>
        <Logo />
      </TopContainer>
      <MiddleContainer>
        <FraseCadastroContainer>
          <FraseCadastro>Cadastre-se</FraseCadastro>
        </FraseCadastroContainer>
        <InputContainer>
          <Input title="Email" place="Email" />
          <Input title="Senha" place="Senha" />
          <Input title="Confirmar Senha" place="Confirmar Senha" />
        </InputContainer>
      </MiddleContainer>
      <BottomContainer>
        <Button statusType="confirmation">Entrar</Button>
      </BottomContainer>
    </Container>
  );
};

export default LoginPage;
