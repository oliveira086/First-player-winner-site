import React from 'react';

import trophy from '../../../assets/icons/trophy.png';
import calendar from '../../../assets/icons/calendar.png';

import {
  Container,
  GameImage,
  Image,
  DescriptionContainer,
  GameLabel,
} from './styles';

const ChampionshipCardList: React.FC = () => {
  return (
    <Container>
      <GameImage />
      <DescriptionContainer>
        <span className="title">
          <Image src={trophy} />
          Campeonato do frifas
        </span>
        <span className="date">
          <Image src={calendar} />
          14/08/2021
        </span>
      </DescriptionContainer>
      <GameLabel> Free Fire </GameLabel>
    </Container>
  );
};

export default ChampionshipCardList;
