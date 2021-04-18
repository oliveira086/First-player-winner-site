import React from 'react';

import NavigationMenu from '../../components/molecules/NavigationMenu';

import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <h1>Hello from Home page</h1>

      <NavigationMenu />
    </Container>
  );
};

export default Home;
