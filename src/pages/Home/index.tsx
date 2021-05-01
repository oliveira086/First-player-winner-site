import React from 'react';
import HeaderMainPage from '../../components/molecules/HeaderMainPage';

import NavigationMenu from '../../components/molecules/NavigationMenu';

import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <HeaderMainPage />

      <NavigationMenu />
    </Container>
  );
};

export default Home;
