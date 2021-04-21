import styled from 'styled-components';

import { InputProps } from './index';

export const Container = styled.input<InputProps>`
  width: 100%;
  height: 45px;
  max-width: 350px;
  border-style: none;
  border-bottom: 2px solid;
  border-bottom-color: ${props =>
    props.statusType === 'confirmation' ? '#00AF54' : '#E80234'};
  font-weight: 600;
  color: #fff;

  :disabled {
    background: #c4c4c4;
    cursor: not-allowed;
  }
`;
