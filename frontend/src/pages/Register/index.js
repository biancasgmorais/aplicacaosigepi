import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import telainicial from '~/assets/telainicial.png';
import logoufersa from '~/assets/logoufersa.png';

import { signUpRequest } from '~/store/modules/auth/action';

const schema = Yup.object().shape({
  name: Yup.string().required('Nome obrigatório'),

  registration: Yup.number().required('Número de matricula SIG obrigatório'),

  password: Yup.string()
    .min(6, 'Mínimo de 6 caracteres')
    .required('A senha é obrigatória'),
});

export default function Register() {
  const dispatch = useDispatch();

  function handleSubmit({ name, registration, password }) {
    dispatch(signUpRequest(name, registration, password));
  }

  return (
    <>
      <img src={telainicial} alt="SIGEPI" />
      <h1>SISTEMA DE GESTÃO DE EPI's</h1>
      <Form schema={schema} onSubmit={handleSubmit}>
        <h2>REGISTRAR-SE</h2>
        <Input name="name" placeholder="Nome" />
        <Input name="registration" placeholder="Matricula SIG" />
        <Input name="password" type="password" placeholder="Senha SIG" />

        <button type="submit">Criar conta</button>
        <Link to="/">Já tenho conta</Link>
      </Form>
      <div className="fimpage">
        <img src={logoufersa} alt="ufersalogo" />
      </div>
    </>
  );
}
