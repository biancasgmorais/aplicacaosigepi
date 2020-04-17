import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signInRequest } from '~/store/modules/auth/action';

import telainicial from '~/assets/telainicial.png';
import logoufersa from '~/assets/logoufersa.png';

const schema = Yup.object().shape({
  registration: Yup.number().required('Número de matricula SIG obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

export default function Login() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);

  function handleSubmit({ registration, password }) {
    dispatch(signInRequest(registration, password));
  }

  return (
    <>
      <img src={telainicial} alt="SIGEPI" />
      <h1>SISTEMA DE GESTÃO DE EPI's</h1>
      <Form schema={schema} onSubmit={handleSubmit}>
        <h2>LOGIN</h2>
        <Input name="registration" placeholder="Matricula SIG" />
        <h2>SENHA</h2>
        <Input name="password" type="password" placeholder="Senha SIG" />

        <button type="submit">{loading ? 'Carregando..' : 'Entrar'}</button>
        <Link to="/register">Criar conta</Link>
      </Form>
      <div className="fimpage">
        <img src={logoufersa} alt="ufersalogo" />
      </div>
    </>
  );
}
