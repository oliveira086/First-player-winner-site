import styled from 'styled-components';

// import { InputProps } from './index';

export const Container = styled.div`
  width: 100%;
  max-width: 350px;

  span {
    display: block;
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
