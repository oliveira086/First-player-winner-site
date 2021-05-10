import React from 'react';
import Slider from 'react-slick';
import { Container } from './styles';

const Carousel: React.FC = ({ children }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1.1,
    slidesToScroll: 1.0,
    arrows: true,

    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Container>
      <Slider {...settings}>{children}</Slider>
    </Container>
  );
};

export default Carousel;
