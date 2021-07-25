import React, { InputHTMLAttributes, useState } from 'react';
import { Container, InputContainer, ErrorText, InputLabel } from './styles';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  statusType?: 'confirmation' | 'error';
  title: string;
  error?: string;
}

const Input: React.FC<InputProps> = ({ title, error, ...props }) => {
  const [isLabelVisible, setIsLabelVisible] = useState(false);

  return (
    <Container>
      <InputLabel visible={isLabelVisible}>{title}</InputLabel>
      <InputContainer
        {...props}
        onFocus={() => setIsLabelVisible(true)}
        placeholder={!isLabelVisible ? title : ''}
      />

      {error && <ErrorText>{error}</ErrorText>}
    </Container>
  );
};

export default Input;
