import styled from 'styled-components';

export const Container = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: #f7f7f7;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.header`
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Image = styled.img`
  margin: 0 36.5px;
  height: 18px;
`;

export const NewChampionship = styled.button`
  width: 90%;
  height: 60px;
  border-radius: 10px;
  background-color: #fbaf00;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 80px;
  font-weight: 600;
  font-size: 18px;
  outline: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
