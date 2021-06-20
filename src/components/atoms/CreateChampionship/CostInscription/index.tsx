import React, { ChangeEvent, InputHTMLAttributes } from 'react';
import CurrencyInput from 'react-currency-input-field';
import styled from 'styled-components';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string | number;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  label: string;
}

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 30px;
`;

const InputContainer = styled.div`
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
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 12px;
  input {
    font-weight: inherit;
    font-size: inherit;
    width: 100%;
    border: none;
    background-color: inherit;
    padding-left: 8px;
  }
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

const CostInscription: React.FC<InputProps> = ({ value, setValue, label }) => {
  function handleChangeValue(e: string | undefined) {
    if (Number(e) >= 0) setValue(`${e || 0}`);
  }

  return (
    <Container>
      <InputContainer>
        R$
        <CurrencyInput
          value={value}
          decimalSeparator=","
          groupSeparator="."
          decimalsLimit={2}
          onValueChange={e => handleChangeValue(e)}
          allowNegativeValue={false}
        />
      </InputContainer>
      <Label>{label}</Label>
    </Container>
  );
};

export default CostInscription;
