import React from 'react';
import styled from 'styled-components'

const Button = styled.button`
  width: 90%;
  height: 35%;
  border-radius: 10px;
  outline: none;
  border-style: none;
  background-color: ${props => props.color || "green"};
  
`

const Text = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: ${props => props.textColor || "white"};
  font-family: 'Poppins'
`

function ButtonAtom(props) {
  return (
    <Button color={'#20B15A'} onClick={props.onClick}>
      <Text>{props.text}</Text>
    </Button>
  )
}

export default ButtonAtom