import React, { InputHTMLAttributes } from 'react';
import { Container } from './styles';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  statusType?: 'confirmation' | 'error';
}

const Input: React.FC<InputProps> = () => <Container />;

export default Input;
