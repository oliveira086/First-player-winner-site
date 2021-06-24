import styled from 'styled-components';

import { darken } from 'polished';

export const Header = styled.header`
  width: 100%;
  height: 200px;
  background-color: #fbaf00;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const SearchContainer = styled.div`
  width: calc(100% - 60px);
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
`;

export const SearchBox = styled.div`
  width: calc(100% - 40px);
  height: 30px;
  background-color: white;
  border-radius: 10px;
  border: none;
  padding-left: 18px;
  font-size: 14px;
  display: flex;
  align-items: center;
  color: #000;
  input {
    width: 100%;
    border-radius: 10px;
    height: 100%;
    border: none;
    ::placeholder {
      color: #d2d1d3;
    }
  }
  div {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 16px;
  }
`;

export const Icon = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background: rgba(0, 175, 84, 0.31);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  height: 140px;
  width: calc(100% - 60px);
  background-color: white;
  box-shadow: 0px 14px 28px 2px rgba(251, 175, 0, 0.21);
  position: absolute;
  bottom: -40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  > div {
    height: 85px;
    width: calc(100% - 140px);
    margin-left: 30px;
  }

  div {
    > span {
      font-size: 12px;
      color: #6c6d71;
    }

    span + span {
      font-weight: 500;
      font-size: 18px;
      line-height: 27px;
    }

    div {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 20px;
    }
  }

  hr {
    margin-top: 5px;
    margin-right: 50px;
  }

  a {
    color: #e80234;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    margin-right: 50px;
  }

  button {
    border: 0;
    width: 85px;
    height: 85px;
    background-color: #00af54;
    color: white;
    font-size: 14px;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
    transition: background 0.2s;

    :hover {
      background-color: ${darken(0.05, '#00af54')};
    }
  }
`;
