import React from 'react';
import Slider from 'react-slick';

import { Container } from './styles';

interface ICarousel {
  slidesToShow?: number;
  dots?: boolean;
  arrows?: boolean;
}

const Carousel: React.FC<ICarousel> = ({
  children,
  arrows = true,
  slidesToShow = 1,
  dots = true,
}) => {
  const settings = {
    dots,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1.0,
    arrows,
  };
  return (
    <Container>
      <Slider {...settings}>{children}</Slider>
    </Container>
  );
};

export default Carousel;
