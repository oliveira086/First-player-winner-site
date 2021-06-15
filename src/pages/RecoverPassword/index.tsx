import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Button from '../../components/atoms/Button';
import Input from '../../components/atoms/Input';
import HeaderLogin from '../../components/molecules/HeaderLogin';
import confirmImg from '../../assets/icons/confirm.png';

import {
  Container,
  InputContainer,
  ButtonsContainer,
  MessageContainer,
} from './styles';

const RecoverPassword: React.FC = () => {
  const { push } = useHistory();

  const [isEmailSended, setIsEmailSended] = useState(false);

  return (
    <Container>
      <HeaderLogin />
      {!isEmailSended ? (
        <InputContainer>
          <p>Recuperar senha</p>
          <Input placeholder="email" title="email" />
        </InputContainer>
      ) : (
        <MessageContainer>
          <img
            src={confirmImg}
            alt="confirm-icon"
            width="150px"
            height="150px"
          />
          <span>
            Email enviado <br />
            Verifique sua caixa
            <br />
            de entrada
          </span>
        </MessageContainer>
      )}
      <ButtonsContainer>
        {!isEmailSended && (
          <Button statusType="confirmation"> Recuperar senha</Button>
        )}
        <Button statusType="cancel" onClick={() => push('/auth')}>
          {isEmailSended ? 'voltar' : 'Cancelar'}
        </Button>
      </ButtonsContainer>
    </Container>
  );
};

export default RecoverPassword;
