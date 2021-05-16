import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: space-between;
  background-color: #f7f7f7;
  span {
    font-size: 24px;
    font-weight: 600;
    text-align: center;
    line-height: 36px;
  }
`;

export const ButtonContainer = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 50px;
  button {
    margin-bottom: 0;
  }
`;

export const Input = styled.input`
  height: 55px;
  width: 255px;
  background-color: #d2d1d3;
  border-radius: 10px;
  border: 0;
  font-size: 50px;
  font-weight: 600;
  text-align: center;
`;
export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 250px;
  a {
    color: #9b9b9b;
    font-size: 14px;
    margin-top: 16px;
  }
`;
