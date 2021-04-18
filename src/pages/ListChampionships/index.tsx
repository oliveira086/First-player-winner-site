import React from 'react';
import backIcon from '../../assets/icons/backIcon.png';
import searchIcon from '../../assets/icons/searchIcon.png';
import ChampionshipCardList from '../../components/molecules/ChampionshipCardList';

import { Container, Header, Image, NewChampionship } from './styles';

const ListChampionships: React.FC = () => {
  return (
    <Container>
      <Header>
        <Image src={backIcon} />
        <Image src={searchIcon} />
      </Header>

      <NewChampionship> Novo campeonato </NewChampionship>
      <ChampionshipCardList />
    </Container>
  );
};

export default ListChampionships;
