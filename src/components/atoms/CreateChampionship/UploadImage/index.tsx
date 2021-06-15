import React, { ChangeEvent, InputHTMLAttributes } from 'react';
import styled from 'styled-components';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  setValue: (event: ChangeEvent<HTMLInputElement>) => void;
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
  height: 160px;
  border-radius: 10px;
  background-color: #d2d1d3;
  padding: 0 20px;
  max-width: 500px;
  font-size: 12px;
  font-weight: 500;
  position: relative;
  display: flex;
  justify-items: center;
  align-items: center;
`;

const UploadImage: React.FC<InputProps> = ({ setValue }) => {
  return (
    <Container>
      <InputContainer onChange={setValue} type="file" />
    </Container>
  );
};

export default UploadImage;
