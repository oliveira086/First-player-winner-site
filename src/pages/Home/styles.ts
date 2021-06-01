import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  h2 {
    width: 100%;
    margin-bottom: 30px;
    font-size: 18px;
    font-weight: 500;
  }
`;

export const CarouselContainer = styled.div`
  margin: 60px;
  width: 100%;
  max-width: 380px;
  padding: 20px;
`;

export const GamesContainer = styled.div`
  padding: 0 20px;
  width: 100%;
  margin-bottom: 20px;

  /* Carousel */
  div {
    margin: 0%;
    margin: 0 auto;
  }
`;

export const ChampionShipContainer = styled.div`
  width: 100%;
  padding: 20px;
  margin: 20px 0;
`;

export const ChampionShipItemContent = styled.div`
  background: #e9e9e9;
  width: 90%;
  min-width: 100px;
  height: 130px;
  border-radius: 5px;
  display: flex;
  margin: 0 200px;
`;

export const ChampionShipItem = styled.div`
  position: relative;
  width: 100%;
`;
