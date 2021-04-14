import React from 'react';
import { Container, ContainerButton } from './style'
import Button from '../../components/atoms/Button'

function PreLogin () {
  function _goToLoginPage() {
    window.location.href = '/login'
  }
  return (
    <Container>
      
      <ContainerButton>
        <Button color={'#20B15A'} text={"Entrar"} textColor={'#F7F7F7'} onClick={() => _goToLoginPage()}></Button>
      </ContainerButton>
      
    </Container>
  )
}

export default PreLogin