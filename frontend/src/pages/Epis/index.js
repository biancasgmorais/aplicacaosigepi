import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { updateEpiRequest } from '~/store/modules/epis/action';

import { Container, Content } from './styles';

import capacete from '~/assets/capacete.png';
import voltar from '~/assets/botaovoltar1.png';

const schema = Yup.object().shape({
  id: Yup.number()
    .transform((value) => (!value ? undefined : value))
    .integer(),
  epi: Yup.string(),
  description: Yup.string(),
  numberca: Yup.number().required('O número do CA é obrigatório!'),
  amount: Yup.number(),
  date_validate: Yup.date(),
});

export default function Epis({ location }) {
  const dispatch = useDispatch();

  const { epiLocated } = location.state || {};
  const [epi] = useState(epiLocated);

  const handleSubmit = (data) => {
    data = {
      ...data,
      id: epi.id,
    };
    dispatch(updateEpiRequest(data));
  };

  return (
    <Container>
      <Content>
        <img src={capacete} alt="epis" />
        <h1>Edição de EPI's</h1>

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

          <div className="botoes">
            <button type="submit">Editar EPI</button>
          </div>
        </Form>

        <div className="back">
          <Link to="/listepis">
            <img src={voltar} alt="voltar" />
          </Link>
        </div>
      </Content>
    </Container>
  );
}

Epis.defaultProps = {
  location: PropTypes.shape({
    state: {},
  }),
};

Epis.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.object,
  }),
};
