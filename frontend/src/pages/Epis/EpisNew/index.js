import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { createEpiRequest } from '~/store/modules/epis/action';

import { Container, Content } from './styles';

import capacete from '~/assets/capacete.png';
import voltar from '~/assets/botaovoltar1.png';

const schema = Yup.object().shape({
  epi: Yup.string().required('Nome do EPI é necessário!'),
  description: Yup.string().required('Descrição do EPI é obrigatória!'),
  numberca: Yup.number().required('Número do CA é obrigatório'),
  amount: Yup.number().required('Quantidade é obrigatório!'),
  date_validate: Yup.date().required(
    'A data de validade do EPI é obrigatória!'
  ),
});

export default function EpisNew() {
  const dispatch = useDispatch();

  const handleSubmit = (data, { resetForm }) => {
    dispatch(createEpiRequest(data));
    resetForm();
  };

  return (
    <Container>
      <Content>
        <img src={capacete} alt="epis" />
        <h1>Cadastro de EPI's</h1>
        <Form schema={schema} onSubmit={handleSubmit}>
          <h2>EPI</h2>
          <Input name="epi" />
          <h2>Descrição do EPI</h2>
          <Input name="description" />
          <h2>Número do CA</h2>
          <Input name="numberca" type="number" />
          <h2>Quantidade</h2>
          <Input name="amount" type="number" />
          <h2>Data de Validade</h2>
          <Input name="date_validate" type="date" />
        </Form>
        <div className="botoes">
          <button type="submit">Salvar EPI</button>
        </div>
        <div className="back">
          <Link to="/listepis">
            <img src={voltar} alt="voltar" />
          </Link>
        </div>
      </Content>
    </Container>
  );
}
