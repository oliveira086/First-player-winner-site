import styled from 'styled-components';

export const TransactionContent = styled.div`
  height: 60px;
  display: flex;
  flex-direction: row;
`;

export const Separator = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 4px;
  height: 60px;
  margin-right: 11px;
  svg {
    padding: 0px;
  }
`;

export const VerticalLine = styled.div`
  display: flex;
  margin-top: 5px;
  height: 25px;
  border-left: 1px solid #666468;
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Title = styled.span`
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  color: #020c28;
`;

export const Especifications = styled.span`
  font-size: 12px;
  line-height: 18px;
  font-weight: 500;
  color: #666468;
`;
