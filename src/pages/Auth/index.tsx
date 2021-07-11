import React, { useState, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Formik } from 'formik';
import * as yup from 'yup';
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
import { emailValidator, passwordValidator } from '../../utils/yupValidators';
import { useAuth } from '../../contexts/auth';

interface LoginData {
  email: string;
  password: string;
}

const Auth: React.FC = () => {
  const [isRegister, setIsRegister] = useState(false);
  const { push } = useHistory();
  const { signIn, user, signed } = useAuth();

  const handleLogin = async ({ email, password }: LoginData) => {
    try {
      console.log('ei', signed, user);
      await signIn({
        email,
        password,
      });

      toast.success('Login efetuado com sucesso');
      push('/home');
    } catch (err) {
      toast.error(
        'Falha no login, verifique suas credenciais e tente novamente',
      );
    }
  };

  const loginValidationSchema = yup.object().shape({
    email: emailValidator,
    password: passwordValidator,
  });

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
        <Formik
          initialValues={{ email: '', password: '' }}
          validateOnChange={false}
          validateOnBlur={false}
          validationSchema={loginValidationSchema}
          onSubmit={values => handleLogin(values)}
        >
          {({ handleChange, values, errors, handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <Input
                type="email"
                name="email"
                title="Email"
                placeholder="Email"
                onChange={handleChange}
                value={values.email}
                error={errors.email ? errors.email : undefined}
              />
              <Input
                type="password"
                name="password"
                title="Senha"
                placeholder="Senha"
                onChange={handleChange}
                value={values.password}
                error={errors.password ? errors.password : undefined}
              />
              {isRegister && (
                <Input title="Confirmar senha" placeholder="Confirmar senha" />
              )}
              {!isRegister && (
                <LinkContainer>
                  <Link to="/password/recover">Recuperar senha?</Link>
                </LinkContainer>
              )}

              <Button statusType="confirmation" type="submit">
                {isRegister ? 'Cadastre-se' : 'Entrar'}
              </Button>
            </Form>
          )}
        </Formik>
        <Footer>
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
      </Content>
    </Container>
  );
};

export default Auth;
