import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 350px;
  div:first-child {
    height: 18px;
    width: 100%;
  }

  && + div {
    margin: 30px 0;
  }
`;

interface IInputLabelProps {
  visible: boolean;
}

export const InputLabel = styled.label<IInputLabelProps>`
  opacity: ${props => (props.visible ? '1' : '0')};
  transition: opacity 0.2s;
  font-size: 14px;
`;

export const InputContainer = styled.input`
  width: 100%;
  font-size: 14px;
  height: 100%;
  border-style: none;
  ::placeholder {
    color: #000;
    font-size: 14px;
  }
  border-bottom: 2px solid;
  border-bottom-color: #000;
  background-color: #f7f7f7;
`;

export const ErrorText = styled.span`
  font-size: 14px;
  margin: 8px 0;
  color: red;
`;
