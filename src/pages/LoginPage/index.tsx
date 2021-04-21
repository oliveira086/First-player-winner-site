import React from 'react';

import {
  Container,
  TopContainer,
  MiddleContainer,
  BottomContainer,
} from './styles';

import Button from '../../components/atoms/Button';
import Input from '../../components/atoms/Input';

const LoginPage: React.FC = () => {
  return (
    <Container>
      <TopContainer />
      <MiddleContainer>
        <Input />
        <Input />
      </MiddleContainer>
      <BottomContainer>
        <Button statusType="confirmation">Entrar</Button>
      </BottomContainer>
    </Container>
  );
};

export default LoginPage;
