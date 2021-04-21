import React from 'react';

import {
  Container,
  TopContainer,
  MiddleContainer,
  BottomContainer,
} from './styles';

import Button from '../../components/atoms/Button';

const LoginPage: React.FC = () => {
  return (
    <Container>
      <TopContainer />
      <MiddleContainer />
      <BottomContainer>
        <Button statusType="confirmation">Entrar</Button>
      </BottomContainer>
    </Container>
  );
};

export default LoginPage;
