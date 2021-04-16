import React from 'react';

import { Container } from './styles';

import Button from '../../components/atoms/Button';

const PreLoginPage: React.FC = () => {
  return (
    <Container>
      <h1>Hello from PreLogin page</h1>

      <Button statusType="confirmation">Entrar</Button>
    </Container>
  );
};

export default PreLoginPage;
