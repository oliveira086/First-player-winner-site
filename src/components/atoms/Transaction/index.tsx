import React from 'react';
import styled from 'styled-components';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const TransactionContent = styled.div`
  height: 60px;
  display: flex;
  flex-direction: row;
`;

const Separator = styled.div`
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

const VerticalLine = styled.div`
  display: flex;
  margin-top: 5px;
  height: 25px;
  border-left: 1px solid #666468;
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Title = styled.span`
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  color: #020c28;
`;

const Especifications = styled.span`
  font-size: 12px;
  line-height: 18px;
  font-weight: 500;
  color: #666468;
`;

interface TrasactionProps {
  name: string;
  value: string;
  date: string;
  isReceived?: boolean;
}

const Transaction: React.FC<TrasactionProps> = ({
  isReceived = false,
  value,
  name,
  date,
}) => {
  return (
    <TransactionContent>
      <Separator>
        {isReceived ? <FiChevronUp /> : <FiChevronDown />}
        <VerticalLine />
      </Separator>
      <TextContent>
        <Title>
          Tranferência recebida - {date}
          <br />
        </Title>
        <Especifications>
          {name} <br />
          R$ {value}
        </Especifications>
      </TextContent>
    </TransactionContent>
  );
};

export default Transaction;
