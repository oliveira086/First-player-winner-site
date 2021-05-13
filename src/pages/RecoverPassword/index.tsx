import React from 'react';

import Button from '../../components/atoms/Button';
import Input from '../../components/atoms/Input';
import HeaderLogin from '../../components/molecules/HeaderLogin';

import { Container } from './styles';

const RecoverPassword: React.FC = () => {
  return (
    <Container>
      <HeaderLogin />
      <div className="input-container">
        <p>Recuperar senha</p>
        <Input place="email" id="inpt" title="email" />
      </div>
      <div className="button-container">
        <Button statusType="confirmation"> Recuperar senha</Button>
        <Button about="Cancelar">Cancelar</Button>
      </div>
    </Container>
  );
};

export default RecoverPassword;
