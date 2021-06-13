import React, { useCallback, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
  Container,
  Footer,
  Content,
  Form,
  LinkContainer,
  HeaderContainer,
  Title,
} from './styles';

import Button from '../../components/atoms/Button';
import Input from '../../components/atoms/Input';
import logoImg from '../../assets/imgs/logo.png';

const Auth: React.FC = () => {
  const [isRegister, setIsRegister] = useState(false);
  const { push } = useHistory();

  const handleSubmit = useCallback(() => {
    push('/home');
  }, [push]);

  return (
    <Container>
      <Content>
        <HeaderContainer row={isRegister}>
          <header>
            <img src={logoImg} alt="first player winner" />
          </header>
          <div>
            <h2>
              Pronto para ser o <br /> maior vencedor?
            </h2>
            <p>
              {isRegister
                ? 'Crie sua conta e inicie sua jornada!'
                : 'Acesse sua conta e inicie sua jornada!'}
            </p>
          </div>
        </HeaderContainer>
        {isRegister && <Title>Cadastre-se</Title>}

        <Form>
          <Input title="Email" placeholder="Email" />
          <Input title="Senha" placeholder="Senha" />
          {isRegister && (
            <Input title="Confirmar senha" placeholder="Confirmar senha" />
          )}
        </Form>
        {!isRegister && (
          <LinkContainer>
            <Link to="/password/recover">Recuperar senha?</Link>
          </LinkContainer>
        )}
      </Content>
      <Footer>
        <Button statusType="confirmation" onClick={handleSubmit}>
          {isRegister ? 'Cadastre-se' : 'Entrar'}
        </Button>

        <button type="button" onClick={() => setIsRegister(state => !state)}>
          {isRegister ? (
            <>
              Já possui conta? <strong>Logar</strong>
            </>
          ) : (
            'Cadastre-se'
          )}
        </button>
      </Footer>
    </Container>
  );
};

export default Auth;
