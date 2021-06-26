import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: #f7f7f7;
`;

const UserInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }

  .user-id {
    display: flex;
    margin-top: 30px;
    gap: 10px;

    .icon-container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 30px;
      width: 30px;
      background-color: #fbaf00;
      border-radius: 5px;
    }
    span {
      height: 30px;
      background-color: #fbaf00;
      font-size: 14px;
      border-radius: 5px;
      font-weight: 500;
      padding: 5px 12px;
    }
  }
`;

const Options = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 30px);
  margin-top: 40px;
  max-width: 500px;
  gap: 20px;

  button {
    display: flex;
    background: transparent;
    border: none;
    span {
      margin-left: 30px;
    }
  }
`;

export { Container, UserInfo, Options };
