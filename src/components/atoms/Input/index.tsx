import React, { InputHTMLAttributes, useState } from 'react';
import { Container, InputContainer } from './styles';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  statusType?: 'confirmation' | 'error';
  placeholder: string;
  title: string;
}

const Input: React.FC<InputProps> = ({ placeholder, title }) => {
  const [click, setClik] = useState(true);

  function clicked(isClicked: boolean) {
    setClik(isClicked);
  }

  return (
    <Container>
      {!click ? <span>{title}</span> : <div />}

      <InputContainer
        onFocus={() => clicked(false)}
        onBlur={() => clicked(true)}
        placeholder={click ? placeholder : ''}
      />
    </Container>
  );
};

export default Input;
