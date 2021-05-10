import React from 'react';
import NavigationMenu from '../../components/molecules/NavigationMenu';
import Carousel from '../../components/molecules/Carousel';
import bannerImg from '../../assets/imgs/banner.png';
import Image from '../../components/atoms/Image';
import { Container, CarouselContainer } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <h1>Hello from Home page</h1>

      <NavigationMenu />

      <CarouselContainer>
        <Carousel>
          <Image source={bannerImg} width="300px" height="150px" />
          <Image source={bannerImg} width="300px" height="150px" />
          <Image source={bannerImg} width="300px" height="150px" />
        </Carousel>
      </CarouselContainer>
    </Container>
  );
};

export default Home;
