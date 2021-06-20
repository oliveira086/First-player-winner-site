import React, { useState } from 'react';
import CurrencyInput from 'react-currency-input-field';
import { FiPlus, FiMinus } from 'react-icons/fi';
import styled, { css } from 'styled-components';

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 30px;
`;

const Select = styled.div`
  width: calc(100vw - 60px);
  height: auto;
  border: 2px solid #020c28;
  border-radius: 10px;
  background-color: inherit;
  padding: 0 20px;
  max-width: 500px;
  font-size: 12px;
  font-weight: 500;
  position: relative;
  padding-top: 30px;
  padding-bottom: 12px;
`;

const InputContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  div,
  input,
  .content {
    height: 30px;
    width: 150px;
    border-radius: 5px;
    border: 2px solid black;
    background-color: #d2d1d3;
    display: flex;
    align-items: center;
    padding-left: 20px;
    margin-right: 20px;
    flex: 3;
  }
  .content {
    width: 100px;
    flex: 4;
  }
  div span {
    font-weight: 500;
    font-size: 12px;
  }
  input {
    width: 100%;
    border: none;
    height: 26px;
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

const Plus = styled.button`
  display: flex;
  position: absolute;
  width: 30px;
  height: 30px;
  justify-content: center;
  align-items: center;
  background-color: #00af54;
  font-size: 12px;
  border-radius: 5px;
  top: -12px;
  right: -8px;
  border: none;
  :active {
    background-color: rgba(20, 146, 81, 1);
  }
`;

interface RemoveProp {
  hidden?: boolean;
}

const RemoveIcon = styled.button<RemoveProp>`
  width: 30px;
  height: 30px;
  background-color: #e80234;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 5px;
  :active {
    background-color: #c30831;
  }
  ${props =>
    props.hidden &&
    css`
      background-color: #d8d8d8;
      cursor: not-allowed;
      :active {
        background-color: #d2d1d3;
      }
    `}
`;

const AwardInput: React.FC = () => {
  const [countWinners, setCountWinners] = useState(1);
  const [winnerList, setWinnerList] = useState(['40']);

  function handleAddWinner() {
    if (countWinners < 3) {
      setCountWinners(old => old + 1);
      setWinnerList(old => [...old, '0']);
    }
  }
  function handleRemove(idx: number) {
    if (countWinners >= 1) {
      setCountWinners(old => old - 1);
      setWinnerList(old => old.filter((_, i) => i !== idx));
    }
  }
  function handleChangeAwards(idx: number, value: string | undefined) {
    setWinnerList(old =>
      old.map((val, i) => (i === idx ? `${value || 0}` : val)),
    );
  }

  return (
    <Container>
      <Select>
        {winnerList.map((i, idx) =>
          idx === 0 ? (
            <InputContainer>
              <div>
                <span>{idx + 1}° Colocado</span>
              </div>
              <div className="content">
                R$
                <CurrencyInput
                  value={winnerList[idx]}
                  decimalSeparator=","
                  groupSeparator="."
                  decimalsLimit={2}
                  onValueChange={e => handleChangeAwards(idx, e)}
                  allowNegativeValue={false}
                />
              </div>
              <RemoveIcon hidden>
                <FiMinus color="white" size={24} />
              </RemoveIcon>
            </InputContainer>
          ) : (
            <InputContainer>
              <div>
                <span>{idx + 1}° Colocado</span>
              </div>
              <div className="content">
                R$
                <CurrencyInput
                  value={winnerList[idx]}
                  decimalSeparator=","
                  groupSeparator="."
                  decimalsLimit={2}
                  onValueChange={e => handleChangeAwards(idx, e)}
                  allowNegativeValue={false}
                />
              </div>
              <RemoveIcon onClick={() => handleRemove(idx)}>
                <FiMinus color="white" size={24} />
              </RemoveIcon>
            </InputContainer>
          ),
        )}
      </Select>
      <Label>Valor de premiação</Label>
      <Plus onClick={() => handleAddWinner()}>
        <FiPlus color="white" size={24} />
      </Plus>
    </Container>
  );
};

export default AwardInput;
