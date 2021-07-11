import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  background-color: #f7f7f7;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 20px;
`;

export const Content = styled.main`
  width: 100%;
  max-width: 360px;

  > p {
    font-size: 14px;
  }
`;

export const Form = styled.form`
  margin-top: 38px;
`;

export const LinkContainer = styled.div`
  text-align: right;
`;

interface IHeaderContainerProps {
  row: boolean;
}

export const HeaderContainer = styled.div<IHeaderContainerProps>`
  ${props =>
    props.row &&
    css`
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: row-reverse;
      margin-bottom: 50px;
      > div {
        flex: 1;

        > h2 {
          margin: 5px 0;
          font-size: 20px;
          font-weight: bold;
        }
      }

      @media (max-width: 370px) {
        h2 {
          font-size: 18px;
          max-width: 300px;
        }

        img {
          max-width: 100px;
        }
      }
    `}

  header {
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: ${props => (props.row ? '150px' : '360px')};
    }
  }
`;

export const Title = styled.h2`
  font-size: 28px;
`;

export const Footer = styled.div`
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  button {
    background: transparent;
    border: 0;
  }
`;
