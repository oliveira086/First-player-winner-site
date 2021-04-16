import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  statusType?: 'confirmation' | 'cancel';
}

const Button: React.FC<ButtonProps> = ({ children, statusType, ...rest }) => (
  <Container type="button" statusType={statusType} {...rest}>
    {children}
  </Container>
);

export default Button;
