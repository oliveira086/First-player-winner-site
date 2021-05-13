import styled from 'styled-components';
import logo from '../../assets/imgs/logo.png';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #f7f7f7;
`;

export const Logo = styled.div`
  background-image: url(${logo});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 9.75rem;
  height: 8.4375rem;
  margin-top: 40px;
`;

export const MiddleContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 40vh;
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

export const FraseCadastroContainer = styled.div`
  display: flex;
  padding-left: 1.875rem;
  width: 100%;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  justify-content: left;
`;

export const InputContainer = styled.div`
  width: 85%;
  flex: 1;
  margin-bottom: 50px;
`;

export const FraseCadastro = styled.p`
  font-size: 2.75rem;
  font-weight: 700;
  line-height: 3.125rem;
  //margin-bottom: 0.6875rem;
`;

export const FraseAcima = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 2.25rem;
`;

export const FraseAbaixo = styled.p`
  font-size: 1.25rem;
  font-weight: 300;
  line-height: 1.3125rem;
`;

// <p>Pronto para ser o maior vencedor?</p>
// <p>Acesse sua conta e inicie sua jornada!</p>
