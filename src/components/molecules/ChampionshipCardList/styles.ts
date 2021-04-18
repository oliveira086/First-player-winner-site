import styled from 'styled-components';

export const Container = styled.div`
  width: 90%;
  height: 60px;
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  position: relative;
  margin-bottom: 40px;
`;

export const GameLabel = styled.div`
  min-width: 90px;
  height: 20px;
  background-color: #fbaf00;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  position: absolute;
  top: -10px;
  right: 7px;
  padding: 0 7px;
`;

export const GameImage = styled.img`
  height: 80px;
  width: 80px;
  margin-left: 12px;
  border-radius: 5px;
  margin-top: -10px;
  background-color: #333;
  outline: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const DescriptionContainer = styled.div`
  height: 100%;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 14px;

  .title {
    font-weight: 600;
    width: 100%;
    color: #fbad00;
    display: flex;
    align-items: center;
  }

  .date {
    font-weight: 500;
    width: 100%;
    color: #000;
    display: flex;
    align-items: center;
  }
`;

export const Image = styled.img`
  width: 18px;
  margin-right: 9px;
`;
