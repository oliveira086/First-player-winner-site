import React from 'react';
import styled from 'styled-components';
import Button from '../../components/atoms/Button';
import HeaderLogin from '../../components/molecules/HeaderLogin';
import confirm from '../../assets/icons/confirm.png';

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 100vh;
  background-color: #f7f7f7;
  .button-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    padding-bottom: 50px;
  }
  .message-container {
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .message-container span {
    font-size: 24px;
    font-weight: 600;
    text-align: center;
    margin-top: 30px;
  }
`;

const RecoverPasswordConfirm: React.FC = () => {
  return (
    <Container>
      <HeaderLogin />
      <div className="message-container">
        <img src={confirm} alt="confirm-icon" width="150px" height="150px" />
        <span>
          Email enviado <br />
          Verifique sua caixa
          <br />
          de entrada
        </span>
      </div>
      <div className="button-container">
        <Button about="Cancelar">Cancelar</Button>
      </div>
    </Container>
  );
};

export default RecoverPasswordConfirm;
