import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Footer, Content, Form, LinkContainer } from './styles';

import Button from '../../components/atoms/Button';
import Input from '../../components/atoms/Input';
import logoImg from '../../assets/imgs/logo.png';

const LoginPage: React.FC = () => {
  return (
    <Container>
      <Content>
        <header>
          <img src={logoImg} alt="first player winner" />
        </header>
        <h2>
          Pronto para ser o <br /> maior vencedor?
        </h2>
        <p>Acesse sua conta e inicie sua jornada!</p>

        <Form>
          <Input title="Email" placeholder="Email" />
          <Input title="Senha" placeholder="Senha" />
        </Form>
        <LinkContainer>
          <Link to="/password/recover">Recuperar senha?</Link>
        </LinkContainer>
      </Content>
      <Footer>
        <Button statusType="confirmation">Entrar</Button>
        <Link to="/register">Cadastre-se</Link>
      </Footer>
    </Container>
  );
};

export default LoginPage;
