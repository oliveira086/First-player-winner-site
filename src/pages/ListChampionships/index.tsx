import React from 'react';
import ChampionshipCardList from '../../components/molecules/ChampionshipCardList';
import Header from '../../components/molecules/Header';
import NavigationMenu from '../../components/molecules/NavigationMenu';

import { Container, NewChampionship } from './styles';

const ListChampionships: React.FC = () => {
  return (
    <Container>
      <Header search />
      <NewChampionship> Novo campeonato </NewChampionship>
      <ChampionshipCardList />
      <NavigationMenu />
    </Container>
  );
};

export default ListChampionships;
