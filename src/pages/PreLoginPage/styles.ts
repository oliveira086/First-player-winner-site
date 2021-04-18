import styled from 'styled-components';
import background from '../../assets/imgs/bg-preLogin.jpeg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 100vw;
  height: 100vh;
  padding-bottom: 60px;
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
