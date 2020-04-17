import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { updateDeliverRequest } from '~/store/modules/deliver/action';

import { Container, Content } from './styles';

import entrega from '~/assets/entrega.png';
import voltar from '~/assets/botaovoltar1.png';

const schema = Yup.object().shape({
  id: Yup.number()
    .transform((value) => (!value ? undefined : value))
    .integer(),
  date_delivery: Yup.date().required('data de entrega é obrigatória!'),
  numberca_epi: Yup.number().required('numero do ca do EPI é obrigatório!'),
  amount_epi: Yup.number().required('Quantidade é obrigatório!'),
  registration_user: Yup.number().required(
    'A matricula SIG do usuário é obrigatória!'
  ),
});

export default function Delivers({ location }) {
  const dispatch = useDispatch();

  const { deliverLocated } = location.state || {};
  const [deliver] = useState(deliverLocated);

  const handleSubmit = (data) => {
    data = {
      ...data,
      id: deliver.id,
    };
    dispatch(updateDeliverRequest(data));
  };

  return (
    <Container>
      <Content>
        <img src={entrega} alt="entregas" />
        <h1>Edição de Entrega</h1>
        <Form
          initialData={deliver}
          onSubmit={handleSubmit}
          schema={schema}
          autoComplete="off"
        >
          <h2>Data da Entrega</h2>
          <Input name="date_delivery" type="date" />
          <h2>Número do CA</h2>
          <Input name="numberca_epi" type="number" />
          <h2>Quantidade</h2>
          <Input name="amount_epi" type="number" />
          <h2>Funcionário</h2>
          <Input name="registration_user" type="number" />
          <div className="botoes">
            <button type="submit">Editar Entrega</button>
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

Delivers.defaultProps = {
  location: PropTypes.shape({
    state: {},
  }),
};

Delivers.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.object,
  }),
};
