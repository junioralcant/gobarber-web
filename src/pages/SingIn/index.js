import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

// import { Container } from './styles';

import { signInRequest } from '../../store/modules/auth/actions';

import logo from '../../assets/logo.svg';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um email válido')
    .required('O email é obriatório'),
  password: Yup.string().required('A senha é brigatória'),
});

export default function SingIn() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);

  function handlerSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <img src={logo} alt="GoBarber" />

      <Form schema={schema} onSubmit={handlerSubmit}>
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha secreta"
        />

        <button type="submit">{loading ? 'Carregando...' : 'Acessar'}</button>
        <Link to="/register">Criar conta gratuita</Link>
      </Form>
    </>
  );
}
