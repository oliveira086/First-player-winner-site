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

export const FrasesContainer = styled.div`
  flex: 0.5;
  flex-direction: column;
  align-items: center;
  justify-content: left;
`;

export const FraseLogin = styled.p`
  width: 13.125rem;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 2.25rem;
  margin-bottom: 0.6875rem;
`;

export const FraseAbaixo = styled.p`
  width: 16.75rem;
  font-size: 0.875rem;
  font-weight: 300;
  line-height: 1.3125rem;
`;

// <p>Pronto para ser o maior vencedor?</p>
// <p>Acesse sua conta e inicie sua jornada!</p>
