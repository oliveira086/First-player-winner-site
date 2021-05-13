/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';

import styled from 'styled-components';
import logo from '../../../assets/imgs/logo.png';

const Container = styled.header`
  height: 250px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 30px;
  padding-top: 30px;
  img: {
    display: flex;
    width: 156px;
    height: 135px;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  p {
    font-weight: bold;
    font-size: 24px;
    line-height: 36px;
  }
  span {
    font-weight: 300;
    font-size: 14px;
    line-height: 21px;
  }
`;

const HeaderLogin: React.FC = () => {
  return (
    <Container>
      <TextContainer>
        <p>
          Pronto para ser <br /> o maior vencedor?
        </p>
        <span>Crie sua conta e inicie sua jornada!</span>
      </TextContainer>
      <img src={logo} alt="logo" width="156px" height="135px" />
    </Container>
  );
};

export default HeaderLogin;
