import React from 'react';
import ChampionshipCardList from '../../components/molecules/ChampionshipCardList';
import Header from '../../components/molecules/Header';

import { Container, NewChampionship } from './styles';

const ListChampionships: React.FC = () => {
  return (
    <Container>
      <Header search />
      <NewChampionship> Novo campeonato </NewChampionship>
      <ChampionshipCardList />
    </Container>
  );
};

export default ListChampionships;
