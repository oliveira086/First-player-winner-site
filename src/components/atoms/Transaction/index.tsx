import React from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import {
  Especifications,
  Separator,
  TextContent,
  Title,
  TransactionContent,
  VerticalLine,
} from './styles';

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
