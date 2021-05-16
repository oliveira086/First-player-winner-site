import styled, { css } from 'styled-components';
import { ButtonProps } from './index';

export const Container = styled.button<ButtonProps>`
  ${props =>
    props.statusType
      ? css`
          background-color: ${props.statusType === 'confirmation'
            ? '#00af54'
            : '#e80234'};
          color: #fff;
        `
      : css`
          color: #222;
          background-color: #d2d1d3;
        `}

  border-radius: 5px;

  width: 100%;
  height: 45px;
  max-width: ${({ maxWidth }) => maxWidth || '350px'};
  margin: 12px 0px;
  border: 0;
  font-weight: 600;

  :disabled {
    background: #c4c4c4;
    cursor: not-allowed;
  }
`;
