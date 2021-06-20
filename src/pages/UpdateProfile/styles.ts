import styled from 'styled-components';

export const Container = styled.div`
  padding-bottom: 80px;
`;

interface HeaderProps {
  backgroundImage: string;
}

export const Content = styled.div`
  main {
    padding: 15px 30px;

    strong {
      font-size: 18px;
      font-weight: 700;
    }

    > button {
      margin-top: 60px;
    }
  }
`;

export const ContentHeader = styled.div<HeaderProps>`
  background: blue;
  padding: 30px;
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  content: '';
  height: 411px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  > button {
    background: #f7f7f7;
    border: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    cursor: pointer;
    width: 40px;
    height: 40px;
    box-shadow: 0px 5px 11px rgba(0, 0, 0, 0.2);
  }

  > div {
    h2,
    span {
      color: #fff;
    }

    h2 {
      font-size: 36px;
      line-height: 54px;
      margin-bottom: 10px;
    }
  }
`;

export const InputContainer = styled.div`
  margin: 20px 0;
  display: flex;
  flex-direction: column;

  label {
    font-weight: 600;
    font-size: 14px;
  }

  input {
    margin-top: 5px;
    border: 0;
    border-bottom: 1px solid #666;
  }
`;

export const CarouselItem = styled.div`
  border-radius: 10px;
  height: 120px;
  max-width: 120px;
  background: #e9e9e9;
  padding: 20px 10px;
  width: 50px;
  font-size: 12px;
  cursor: pointer;
  div {
    position: relative;
    top: 45px;
  }
`;
