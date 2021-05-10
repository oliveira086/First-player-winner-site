import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    width: 100%;
    margin-bottom: 30px;
    font-size: 18px;
    font-weight: 500;
  }
`;

export const CarouselContainer = styled.div`
  margin: 60px;
  width: 380px;
  padding: 20px;
`;

export const GamesContainer = styled.div`
  padding: 0 20px;
  width: 100%;
  margin-bottom: 20px;
`;

export const ChampionShipContainer = styled.div`
  width: 100%;
  padding: 0 20px;
  padding: 20px;
`;

export const ChampionShipItem = styled.div`
  background: #f5f5f5;
  width: 10px;
  height: 100px;
  border-radius: 5px;
`;
