import React, { ChangeEvent, InputHTMLAttributes } from 'react';
import styled from 'styled-components';
import { isAfter } from 'date-fns';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string | number;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  label: string;
  date?: boolean;
  multiline?: boolean;
}

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 30px;
`;

const InputContainer = styled.input`
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

const Label = styled.div`
  display: flex;
  position: absolute;
  width: auto;
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

const Input: React.FC<InputProps> = ({
  value,
  setValue,
  label,
  date = false,
  ...rest
}) => {
  function handleChangeValue(e: ChangeEvent<HTMLInputElement>) {
    if (!date) {
      setValue(e.target.value);
    } else if (isAfter(new Date(e.target.value), Date.now())) {
      setValue(e.target.value);
    }
  }

  return (
    <Container>
      <InputContainer
        value={value}
        onChange={handleChangeValue}
        type={date ? 'date' : 'text'}
        {...rest}
      />
      <Label>{label}</Label>
    </Container>
  );
};

export default Input;
