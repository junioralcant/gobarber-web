import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
// import { Container } from './styles';

import logo from '../../assets/logo.svg';

import { signUpRequest } from '../../store/modules/auth/actions';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obriatório'),
  email: Yup.string()
    .email('Insira um email válido')
    .required('O email é obriatório'),
  password: Yup.string()
    .min(6, 'A senha precisa ter no mínimo 6 caracteres')
    .required('A senha é brigatória'),
});

export default function SingUp() {
  const dispatch = useDispatch();

  function handlerSubimit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
  }
  return (
    <>
      <img src={logo} alt="GoBarber" />

      <Form schema={schema} onSubmit={handlerSubimit}>
        <Input name="name" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha secreta"
        />

        <button type="submit">Criar conta</button>
        <Link to="/">Já tenho conta</Link>
      </Form>
    </>
  );
}
