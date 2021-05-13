/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import logo from '../../../assets/imgs/logo.png';
import { Container, TextContainer } from './styles';

const HeaderLogin: React.FC = () => {
  return (
    <Container>
      <TextContainer>
        <p>
          Pronto para ser <br /> o maior vencedor?
        </p>
        <span>Crie sua conta e inicie sua jornada!</span>
      </TextContainer>
      <img src={logo} alt="logo" width="156px" height="135px" />
    </Container>
  );
};

export default HeaderLogin;
