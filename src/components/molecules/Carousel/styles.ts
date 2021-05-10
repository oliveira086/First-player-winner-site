import styled from 'styled-components';

export const Container = styled.div`
  .slick-next {
    width: 50px;
    height: 50px;
    z-index: 999;
    background: url('../../../assets/icons/next.svg') center center no-repeat !important;
    background-size: 100% 100%;
  }

  .slick-next::before {
    display: none;
  }

  .slick-prev {
    width: 50px;
    height: 50px;
    z-index: 999;
    background: url('../../../assets/icons/back.svg') center center no-repeat !important;
    background-size: 100% 100%;
  }

  .slick-disabled {
    opacity: 0.25;
  }

  .slick-prev::before {
    display: none;
  }
`;
