import React from 'react';

import Carousel from '../Carousel';
import { Container, ChampionShipItemContent, ChampionShipItem } from './styles';

const ChampionshipCarousel: React.FC = () => {
  return (
    <Container>
      <h2>Seus campeonatos</h2>

      <Carousel slidesToShow={2.5} arrows={false}>
        <ChampionShipItem>
          <ChampionShipItemContent />
        </ChampionShipItem>
        <ChampionShipItem>
          <ChampionShipItemContent />
        </ChampionShipItem>
        <ChampionShipItem>
          <ChampionShipItemContent />
        </ChampionShipItem>
        <ChampionShipItem>
          <ChampionShipItemContent />
        </ChampionShipItem>
      </Carousel>
    </Container>
  );
};

export default ChampionshipCarousel;
