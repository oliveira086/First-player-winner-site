import React from 'react';

import {
  Container,
  TopContainer,
  MiddleContainer,
  BottomContainer,
  FrasesContainer,
  FraseLogin,
  FraseAbaixo,
} from './styles';

import Button from '../../components/atoms/Button';
import Input from '../../components/atoms/Input';

const LoginPage: React.FC = () => {
  return (
    <Container>
      <TopContainer />
      <MiddleContainer>
        <FrasesContainer>
          <FraseLogin>
            Pronto para ser o <br /> maior vencedor?
          </FraseLogin>
          <FraseAbaixo>Acesse sua conta e inicie sua jornada!</FraseAbaixo>
        </FrasesContainer>
        <Input title="Email" place="Email" />
        <Input title="Senha" place="Senha" />
      </MiddleContainer>
      <BottomContainer>
        <Button statusType="confirmation">Entrar</Button>
      </BottomContainer>
    </Container>
  );
};

export default LoginPage;
