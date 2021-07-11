import * as yup from 'yup';

export const emailValidator = yup
  .string()
  .typeError('Email inválido')
  .email('Email inválido')
  .required('Email é obrigatório');

export const passwordValidator = yup
  .string()
  .typeError('Senha inválida')
  .required('Senha é obrigatória')
  .min(8, 'Senha deve ter no mínimo 8 caracteres');
