import styled from 'styled-components';

export const Container = styled.header`
  height: 250px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 30px;
  padding-top: 30px;
  img: {
    display: flex;
    width: 156px;
    height: 135px;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  p {
    font-weight: bold;
    font-size: 24px;
    line-height: 32px;
  }
  span {
    font-weight: 300;
    font-size: 14px;
    line-height: 21px;
  }
`;
