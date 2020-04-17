import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { createDeliverRequest } from '~/store/modules/deliver/action';

import { Container, Content } from './styles';

import entrega from '~/assets/entrega.png';
import voltar from '~/assets/botaovoltar1.png';

const schema = Yup.object().shape({
  date_delivery: Yup.date().required('data de entrega é obrigatória!'),
  numberca_epi: Yup.number().required('numero do ca do EPI é obrigatório!'),
  amount_epi: Yup.number().required('Quantidade é obrigatório!'),
  registration_user: Yup.number().required(
    'A matricula SIG do usuário é obrigatória!'
  ),
  password_user: Yup.string().required('A senha é obrigatória').min(6),
});

export default function DeliversNew() {
  const dispatch = useDispatch();

  const handleSubmit = (data, { resetForm }) => {
    dispatch(createDeliverRequest(data));
    resetForm();
  };

  return (
    <Container>
      <Content>
        <img src={entrega} alt="entregas" />
        <h1>Cadastro de Entrega</h1>
        <Form onSubmit={handleSubmit} schema={schema}>
          <h2>Data da Entrega</h2>
          <Input name="date_delivery" type="date" />
          <h2>Número do CA</h2>
          <Input name="numberca_epi" type="number" />
          <h2>Quantidade</h2>
          <Input name="amount_epi" type="number" />
          <h2>Funcionário</h2>
          <Input name="registration_user" type="number" />
          <h2>Senha</h2>
          <Input name="password_user" type="password" />
          <div className="botoes">
            <button type="submit">Salvar Entrega</button>
          </div>
        </Form>

        <div className="term">
          <h2>
            O USUÁRIO AO CADASTRAR O EMPRESTIMO CONCORDA COM OS TERMOS DE
            OBRIGAÇÃO LEGAL DO EMPREGADO - NR6
          </h2>
        </div>

        <div className="back">
          <Link to="/listdelivers">
            <img src={voltar} alt="voltar" />
          </Link>
        </div>
      </Content>
    </Container>
  );
}
