import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 100vh;
  background-color: #f7f7f7;
  .button-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    padding-bottom: 50px;
  }
  .message-container {
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .message-container span {
    font-size: 24px;
    font-weight: 600;
    text-align: center;
    margin-top: 30px;
  }
`;
