import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .slider {
    width: 50%;
    margin: 100px auto;
  }

  .slick-slide img {
    width: 100%;
  }

  .slick-prev:before,
  .slick-next:before {
    color: black;
  }
`;

export const CustomArrow = styled.div`
  cursor: pointer;
  width: 20px;
`;
