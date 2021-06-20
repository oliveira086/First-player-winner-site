import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  statusType?: 'confirmation' | 'cancel';
  maxWidth?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  statusType,
  maxWidth,
  ...rest
}) => (
  <Container
    type="button"
    statusType={statusType}
    maxWidth={maxWidth}
    {...rest}
  >
    {children}
  </Container>
);

export default Button;
