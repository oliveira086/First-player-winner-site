import React from 'react';
import Button from '../../components/atoms/Button';
import HeaderLogin from '../../components/molecules/HeaderLogin';
import confirm from '../../assets/icons/confirm.png';
import { Container } from './styled';

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
