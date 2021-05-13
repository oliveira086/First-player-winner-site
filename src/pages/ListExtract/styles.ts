import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f7f7f7;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Hr = styled.hr`
  width: 100%;
`;

export const CardContainer = styled.div`
  display: flex;
  width: 100vw;
  margin-bottom: 10px;
  margin-top: 30px;
  padding-left: 30px;
  flex-direction: row;
  scrollbar-color: transparent transparent;
  overflow-x: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 9px;
  padding-top: 12px;
  flex: none;
  width: 100px;
  height: 60px;
  border-radius: 5px;
  margin-right: 20px;
  background-color: rgba(210, 209, 211, 0.6);
  color: #020c28;
  font-size: 12px;
  line-height: 10px;
  font-weight: 500;
  justify-content: space-between;
  /* -webkit-touch-callout: none; iPhone OS, Safari */
  -webkit-user-select: none; /* Chrome, Safari 3 */
  -khtml-user-select: none; /* Safari 2 */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+ */
  user-select: none;
  :active {
    background-color: rgba(224, 224, 224, 0.6);
  }
`;

export const TransactionContainer = styled.div`
  width: 100%;
  padding-left: 30px;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;
