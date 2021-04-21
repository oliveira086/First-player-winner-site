import React, { InputHTMLAttributes, useState } from 'react';
import { Container, InputContainer } from './styles';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  statusType?: 'confirmation' | 'error';
  place: string;
  title: string;
}

const Input: React.FC<InputProps> = ({ place, title }) => {
  const [click, setClik] = useState(true);

  function clicked() {
    setClik(false);
  }

  return (
    <Container>
      {!click && (
        <span>
          <b>{title}</b>
        </span>
      )}

      <InputContainer
        onFocus={() => clicked()}
        placeholder={click ? place : ''}
      />
    </Container>
  );
};

export default Input;
