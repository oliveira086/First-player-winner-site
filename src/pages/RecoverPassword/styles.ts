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
  .input-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 40vh;
    width: 100vw;
  }
  .input-container p {
    font-size: 24px;
    font-weight: 600;
    width: 350px;
  }
  .button-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    padding-bottom: 50px;
  }
`;
