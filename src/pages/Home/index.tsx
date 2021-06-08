import React from 'react';
import HeaderMainPage from '../../components/molecules/HeaderMainPage';

import NavigationMenu from '../../components/molecules/NavigationMenu';
import Carousel from '../../components/molecules/Carousel';
import bannerImg from '../../assets/imgs/banner.png';

import freefireImg from '../../assets/imgs/games/free-fire.png';
import pubgImg from '../../assets/imgs/games/pubg.png';

import Image from '../../components/atoms/Image';
import {
  Container,
  CarouselContainer,
  GamesContainer,
  ChampionShipContainer,
  ChampionShipItem,
  ChampionShipItemContent,
  ChampionShipCarouselContainer,
} from './styles';

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
      <GamesContainer>
        <h2>Jogos</h2>
        <Carousel slidesToShow={2} dots={false}>
          <Image source={pubgImg} width="66px" height="42px" />
          <Image source={freefireImg} width="150px" height="32px" />
          <Image source={freefireImg} width="150px" height="32px" />
        </Carousel>
      </GamesContainer>
      <ChampionShipContainer>
        <h2>Seus campeonatos</h2>

        <ChampionShipCarouselContainer>
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
        </ChampionShipCarouselContainer>
      </ChampionShipContainer>
    </Container>
  );
};

export default Home;
