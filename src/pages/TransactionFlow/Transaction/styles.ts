import styled from 'styled-components';

interface InputProps {
  borderColor: number;
}

const values = ['#fbaf00', '#00af54', '#e80234'];

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: space-between;
  background-color: #f7f7f7;
  button {
    margin-bottom: 40px;
  }
  span {
    width: 100vw;
    font-size: 18px;
    font-weight: 600;
    line-height: 27px;
    padding: 0 30px;
    text-align: center;
  }
`;

export const InputContainer = styled.div<InputProps>`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 140px;
  .content {
    width: calc(100% - 60px);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 36px;
    font-weight: 600;
    transition: 0.4s border-color ease-in;
    border-bottom: 2px solid ${props => values[props.borderColor]};
    margin-bottom: 20px;
  }
  input {
    padding-left: 6px;
    font-size: 36px;
    font-weight: 600;
    background-color: #f7f7f7;
    border: 0;
    width: 100%;
  }
`;
