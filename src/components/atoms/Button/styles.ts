import styled from 'styled-components';

import { ButtonProps } from './index';

export const Container = styled.button<ButtonProps>`
  border-radius: 5px;
  background: ${props =>
    props.statusType === 'confirmation' ? '#00AF54' : '#E80234'};
  width: 100%;
  height: 45px;
  max-width: 350px;
  margin: 12px 0px;
  border: 0;
  font-weight: 600;
  color: #fff;

  :disabled {
    background: #c4c4c4;
    cursor: not-allowed;
  }
`;
