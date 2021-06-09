import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

interface SelectProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  items: string[];
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 30px;
`;

const Select = styled.select`
  width: calc(100vw - 60px);
  height: 40px;
  border: 2px solid #020c28;
  border-radius: 10px;
  background-color: inherit;
  padding: 0 20px;
  max-width: 500px;
  font-size: 12px;
  font-weight: 500;
  position: relative;
`;

const Viadagem = styled.div`
  display: flex;
  position: absolute;
  width: 80px;
  height: 20px;
  justify-items: center;
  align-items: center;
  padding: 0 20px;
  background-color: #fbaf00;
  font-weight: 500;
  font-size: 12px;
  border-radius: 5px;
  top: -10px;
  left: 20px;
`;

const SelectInput: React.FC<SelectProps> = ({ value, items, setValue }) => {
  return (
    <Container>
      <Select value={value} onChange={e => setValue(e.target.value)}>
        {items.map(i => (
          <option value={i}>{i}</option>
        ))}
      </Select>
      <Viadagem>Games</Viadagem>
    </Container>
  );
};

export default SelectInput;
