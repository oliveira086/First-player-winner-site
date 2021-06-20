import React, { ChangeEvent, InputHTMLAttributes } from 'react';
import { BsCardImage } from 'react-icons/bs';
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

const LabelContainer = styled.label`
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  input {
    display: none;
  }
  p {
    margin-top: 16px;
  }
  p,
  span {
    font-weight: 500;
    font-size: 9px;
  }
`;

const UploadImage: React.FC<InputProps> = ({ setValue }) => {
  return (
    <Container>
      <LabelContainer htmlFor="input-file">
        <BsCardImage size={60} color="#020C28" />
        <p>Adicionar imagem do campeonato</p>
        <span>tamanho recomendado: 350p x 160px</span>
        <input onChange={setValue} type="file" id="input-file" />
      </LabelContainer>
    </Container>
  );
};

export default UploadImage;
