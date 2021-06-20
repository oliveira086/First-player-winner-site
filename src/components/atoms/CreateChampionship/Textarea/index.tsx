import React, { ChangeEvent, InputHTMLAttributes } from 'react';
import styled from 'styled-components';

interface TextAreaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  value: string;
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

const TextAreaContainer = styled.textarea`
  width: calc(100vw - 60px);
  height: auto;
  min-height: 80px;
  max-height: 200px;
  border: 2px solid #020c28;
  border-radius: 10px;
  background-color: inherit;
  padding: 0 20px;
  max-width: 500px;
  font-size: 12px;
  font-weight: 500;
  position: relative;
  padding-top: 15px;
  resize: vertical;
  font-size: 10px;
  font-weight: 500;
  font-family: Poppins, sans-serif;
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

const TextArea: React.FC<TextAreaProps> = ({
  value,
  setValue,
  label,
  ...rest
}) => {
  function handleChangeValue(e: ChangeEvent<HTMLTextAreaElement>) {
    setValue(e.target.value);
  }

  return (
    <Container>
      <TextAreaContainer
        value={value}
        onChange={handleChangeValue}
        rows={1}
        cols={150}
        {...rest}
      />
      <Label>{label}</Label>
    </Container>
  );
};

export default TextArea;
