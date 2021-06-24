import React from 'react';
import { useHistory } from 'react-router-dom';

import Carousel from '../Carousel';
import { Container, ChampionShipItemContent, ChampionShipItem } from './styles';

const ChampionshipCarousel: React.FC = () => {
  const { push } = useHistory();

  return (
    <Container>
      <h2>Seus campeonatos</h2>

      <Carousel slidesToShow={2.5} arrows={false}>
        <ChampionShipItem>
          <ChampionShipItemContent
            onClick={() => push('/championship/details')}
          />
        </ChampionShipItem>
        <ChampionShipItem>
          <ChampionShipItemContent
            onClick={() => push('/championship/details')}
          />
        </ChampionShipItem>
        <ChampionShipItem>
          <ChampionShipItemContent
            onClick={() => push('/championship/details')}
          />
        </ChampionShipItem>
        <ChampionShipItem>
          <ChampionShipItemContent
            onClick={() => push('/championship/details')}
          />
        </ChampionShipItem>
      </Carousel>
    </Container>
  );
};

export default ChampionshipCarousel;
