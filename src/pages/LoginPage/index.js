import React from 'react';
import { Container, TopContainer, MiddleContainer, BottomContainer,
LogoContainer, TextMiddleContainer } from './style';
import Logo from '../../assets/imgs/logo.png'

function LoginPage () {
  return (
    <Container>
      <TopContainer>
        <LogoContainer src={Logo}>
        </LogoContainer>
      </TopContainer>
      <MiddleContainer>
        <TextMiddleContainer>
          <span>Pronto para ser o</span><br></br>
          <span>maior vencedor?</span>
        </TextMiddleContainer>
        
      </MiddleContainer>
      <BottomContainer></BottomContainer>

    </Container>
  )
  
}

export default LoginPage;