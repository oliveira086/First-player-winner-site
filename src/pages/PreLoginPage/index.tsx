import React from 'react';
import { useHistory } from 'react-router-dom';
import { Container } from './styles';
import Button from '../../components/atoms/Button';

const PreLoginPage: React.FC = () => {
  const { push } = useHistory();
  return (
    <Container>
      <Button statusType="confirmation" onClick={() => push('/login')}>
        Entrar
      </Button>
    </Container>
  );
};

export default PreLoginPage;
