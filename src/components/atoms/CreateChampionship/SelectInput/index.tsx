import React, { InputHTMLAttributes, useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';
import styled, { css } from 'styled-components';

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
  input {
    height: 30px;
    width: 150px;
    border: 2px solid black;
    border-radius: 5px;
    background-color: #d2d1d3;
    display: flex;
    align-items: center;
    padding-left: 20px;
    margin-right: 20px;
    flex: 3;
  }
  input {
    width: 100px;
    flex: 4;
  }
  div span {
    font-weight: 500;
    font-size: 12px;
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
  top: -15px;
  right: -15px;
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

const SelectInput: React.FC<SelectProps> = () => {
  const [countWinners, setCountWinners] = useState(1);
  const [winnerList, setWinnerList] = useState([40]);

  function handleAddWinner() {
    if (countWinners < 3) {
      setCountWinners(old => old + 1);
      setWinnerList(old => [...old, 0]);
    }
  }
  function handleRemove(idx: number) {
    if (countWinners >= 1) {
      setCountWinners(old => old - 1);
      setWinnerList(old => old.filter((_, i) => i !== idx));
    }
  }
  function handleChangeAwards(idx: number, value: number) {
    setWinnerList(old => old.map((val, i) => (i === idx ? value : val)));
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
              <input
                value={winnerList[idx]}
                type="number"
                onChange={e => handleChangeAwards(idx, Number(e.target.value))}
              />
              <RemoveIcon hidden>
                <FiMinus color="white" size={24} />
              </RemoveIcon>
            </InputContainer>
          ) : (
            <InputContainer>
              <div>
                <span>{idx + 1}° Colocado</span>
              </div>
              <input
                value={winnerList[idx]}
                type="number"
                onChange={e => handleChangeAwards(idx, Number(e.target.value))}
              />
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

export default SelectInput;
