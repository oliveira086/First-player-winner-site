import styled from 'styled-components';
import logo from '../../assets/imgs/logo.png';

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
  background-image: url(${logo});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100vw;
  height: 40vh;
  background-color: #f7f7f7;
`;

export const MiddleContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 40vh;
  background-color: #f7f7f7;
  justify-content: space-around;
  align-items: center;
`;

export const BottomContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 20vh;
  justify-content: center;
  align-items: center;
`;
