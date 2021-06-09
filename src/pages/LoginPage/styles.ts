import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background-color: #f7f7f7;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  @media (min-width: 600px) {
    height: 100vh;
  }
  padding: 20px;
`;

export const Content = styled.main`
  width: 100%;
  max-width: 360px;

  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img {
      width: 360px;
    }
  }

  > h2 {
    font-size: 24px;
    margin-bottom: 10px;
  }

  > p {
    font-size: 14px;
  }
`;

export const Form = styled.form`
  margin-top: 30px;
`;

export const LinkContainer = styled.div`
  text-align: right;
`;

export const Footer = styled.div`
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: #f7f7f7;
`;
