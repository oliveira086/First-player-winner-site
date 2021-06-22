import React from 'react';
import HeaderMainPage from './components/HeaderMainPage';

import NavigationMenu from '../../components/molecules/NavigationMenu';
import Carousel from '../../components/molecules/Carousel';
import bannerImg from '../../assets/imgs/banner.png';
import GamesCarousel from '../../components/molecules/GamesCarousel';

import Image from '../../components/atoms/Image';
import { Container, CarouselContainer } from './styles';
import ChampionshipCarousel from '../../components/molecules/ChampionshipCarousel';

const Home: React.FC = () => {
  return (
    <Container>
      <HeaderMainPage />
      <NavigationMenu />
      <CarouselContainer>
        <Carousel slidesToShow={1.1} arrows={false}>
          <Image source={bannerImg} width="300px" height="150px" />
          <Image source={bannerImg} width="300px" height="150px" />
          <Image source={bannerImg} width="300px" height="150px" />
        </Carousel>
      </CarouselContainer>

      <GamesCarousel />

      <ChampionshipCarousel />
    </Container>
  );
};

export default Home;
