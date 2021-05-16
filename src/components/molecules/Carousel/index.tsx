import React from 'react';
import Slider from 'react-slick';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { Container, CustomArrow } from './styles';

interface ICarousel {
  slidesToShow?: number;
  dots?: boolean;
  arrows?: boolean;
}

interface ArrowProps {
  type: string;
  onClick?: () => void;
}

const Arrow: React.FC<ArrowProps> = ({ type, onClick }) => {
  let className = type === 'next' ? 'nextArrow' : 'prevArrow';
  className += ' arrow';
  const char =
    type === 'next' ? (
      <IoIosArrowForward size={20} />
    ) : (
      <IoIosArrowBack size={20} />
    );
  return (
    // eslint-disable-next-lines jsx-a11y/no-static-element-interactions
    <CustomArrow>
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
      <span className={className} onClick={onClick}>
        {char}
      </span>
    </CustomArrow>
  );
};

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
    slidesToScroll: 1,
    arrows,
  };
  return (
    <Container>
      <Slider
        nextArrow={<Arrow type="next" />}
        prevArrow={<Arrow type="prev" />}
        {...settings}
      >
        {children}
      </Slider>
    </Container>
  );
};

export default Carousel;
