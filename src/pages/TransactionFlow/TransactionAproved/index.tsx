import React from 'react';
import Button from '../../../components/atoms/Button';
import Header from '../../../components/molecules/Header';

import aproved from '../../../assets/imgs/aproved.png';
import { ButtonContainer, Container, ImageContainer } from './styles';

const TransactionAproved: React.FC = () => {
  return (
    <Container>
      <Header />
      <ImageContainer>
        <span>Transferência concluida!</span>
        <img src={aproved} alt="aprovedTransactionPic" />
      </ImageContainer>
      <ButtonContainer>
        <Button statusType="confirmation">Confirmar</Button>
        <Button statusType="cancel">Cancelar</Button>
      </ButtonContainer>
    </Container>
  );
};

export default TransactionAproved;
