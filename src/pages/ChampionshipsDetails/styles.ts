import styled from 'styled-components';
import backgroundImg from '../../assets/imgs/championship-details.png';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f7f7f7;
  display: flex;
  flex-direction: column;
  flex-direction: column;
  align-items: center;

  main {
    width: 100%;
    padding: 25px 10px;
    display: flex;
    height: 300px;
    text-align: left;
    h2 {
      font-weight: 700;
    }
  }

  section {
    padding: 0 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
    border-top: 2px solid #fbaf00;

    div {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 0px;

      button {
        font-size: 14px;
        background: red;
        width: 100%;
        border: 0;
        background: transparent;
        font-weight: 700;
      }
    }

    ul {
      display: flex;
      flex-direction: column;
      text-align: left;

      li {
        margin: 2px 0;
        display: flex;
        align-items: center;
        justify-content: left;
        padding: 10px;

        span {
          font-weight: 500;
          font-size: 16px;
        }

        img {
          margin-right: 10px;
          width: 40px;
          height: 40px;
          border-radius: 20px;
          background: #c4c4c4;
        }
      }
    }
  }
`;

export const Header = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  height: 250px;
  background-image: url(${backgroundImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  > button {
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 25px;
    top: 25px;
    width: 40px;
    height: 40px;
    background-color: #f7f7f7;
    border-radius: 10px;
    border: 0;
  }
`;
