import styled from 'styled-components';

// import { InputProps } from './index';

export const Container = styled.div`
  width: 100%;
  max-width: 350px;
  div:first-child {
    height: 18px;
    width: 100%;
  }

  span {
    display: block;
    font-size: 12px;
    animation-duration: 0.2s;
    animation-name: fadein;
    @keyframes fadein {
      from {
        opacity: 0;
      }

      to {
        opacity: 1;
      }
    }
  }

  && + div {
    margin: 30px 0;
  }
`;

export const InputContainer = styled.input`
  width: 100%;
  height: 100%;
  border-style: none;
  ::placeholder {
    color: #000;
  }
  border-bottom: 2px solid;
  border-bottom-color: #000;
  background-color: #f7f7f7;
`;
