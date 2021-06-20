import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';
import NavigationMenu from '../../components/molecules/NavigationMenu';

const More: React.FC = () => {
  return (
    <Container>
      <div>
        <h2>Página de mais informações em breve !</h2>

        <br />
        <br />

        <Link to="/profile">Ir para perfil</Link>
      </div>
      <NavigationMenu />
    </Container>
  );
};

export default More;
