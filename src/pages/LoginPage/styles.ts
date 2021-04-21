import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const TopContainer = styled.div`
  width: 100vw;
  height: 40vh;
  background-color: #999;
`;

export const MiddleContainer = styled.div`
  width: 100vw;
  height: 40vh;
  background-color: #494949;
`;

export const BottomContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 20vh;
  justify-content: center;
  align-items: center;
`;
