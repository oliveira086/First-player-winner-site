import React from 'react';

import { Container } from './styles';

const NavigationMenu: React.FC = () => {
  return (
    <Container>
      <h1>Hey</h1>
      <nav>
        <a href="http://google.com">Início</a>
        <a href="http://google.com">Campeonatos</a>
        <a href="http://google.com">Apostas</a>
        <a href="http://google.com">Mais</a>
      </nav>
    </Container>
  );
};

export default NavigationMenu;
