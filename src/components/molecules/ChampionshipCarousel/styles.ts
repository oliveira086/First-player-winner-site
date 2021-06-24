import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 20px;
  margin: 20px 0;

  h2 {
    font-size: 20px;
    margin-bottom: 20px;
  }
`;

export const ChampionShipItem = styled.div`
  position: relative;
  width: 100%;
`;

export const ChampionShipItemContent = styled.div`
  cursor: pointer;
  background: #e9e9e9;
  width: 90%;
  min-width: 100px;
  height: 130px;
  border-radius: 5px;
  display: flex;
  margin: 0 200px;
  transition: background 0.2s;

  :hover {
    background: ${darken(0.1, '#e9e9e9')};
  }
`;
