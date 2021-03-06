import styled from 'styled-components';

export const Container = styled.header`
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
`;

export const IconContainer = styled.button.attrs({
  type: 'button',
})`
  border: 0;
  background: transparent;
`;
