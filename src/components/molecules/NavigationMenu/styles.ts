import { LiHTMLAttributes } from 'react';
import styled from 'styled-components';

interface IListItem extends LiHTMLAttributes<HTMLLIElement> {
  selected?: boolean;
}

export const Container = styled.nav`
  z-index: 1;
  position: fixed;
  bottom: 0;
  background-color: #020c28;
  width: 100%;
  color: #fff;

  a {
    color: #fff;
    font-size: 12px;
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: center;

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      background: red;
      width: 45px;
      height: 45px;
      margin-top: -70px;
      border-radius: 50%;

      background: #fff;
      box-shadow: 0px 5px 11px 0px #00000099;
    }
  }

  button {
    margin: 0 10px;
    width: 45px;
    background: transparent;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
  }
`;

export const ListItem = styled.li<IListItem>`
  cursor: pointer;
  display: flex;
  width: 70px;
  height: 60px;
  margin: 0 10px;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  a {
    text-align: center;
    margin-top: 3px;
    color: ${props => (props.selected ? '#FFD12E' : '#FFF')};
  }

  img,
  svg {
    width: 20px;
    color: ${props => (props.selected ? '#FFD12E' : '#FFF')};
  }
`;
