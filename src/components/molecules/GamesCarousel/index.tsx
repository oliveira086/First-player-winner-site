import React from 'react';

import { Container } from './styles';

import freefireImg from '../../../assets/imgs/games/free-fire.png';
import pubgImg from '../../../assets/imgs/games/pubg.png';

import Image from '../../atoms/Image';
import Carousel from '../Carousel';

const GamesCarousel: React.FC = () => {
  return (
    <Container>
      <h2>Jogos</h2>
      <Carousel slidesToShow={2} dots={false}>
        <Image source={pubgImg} width="66px" height="42px" />
        <Image source={freefireImg} width="150px" height="32px" />
        <Image source={freefireImg} width="150px" height="32px" />
      </Carousel>
    </Container>
  );
};

export default GamesCarousel;
