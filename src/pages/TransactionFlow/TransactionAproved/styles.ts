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

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  img {
    width: 70%;
  }
  span {
    font-size: 24px;
    font-weight: 600;
    text-align: center;
    line-height: 36px;
  }
`;
