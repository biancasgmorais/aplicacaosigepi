import { takeLatest, call, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '~/services/history';

import api from '~/services/api';

export function* createDeliver({ payload }) {
  try {
    const deliver = payload.data;

    yield call(api.post, 'delivers', deliver);

    toast.success('Entrega cadastrado com sucesso!');
  } catch (error) {
    toast.error('Erro ao cadastrar entrega, verifique os dados...');
  }
}

export function* updateDeliver({ payload }) {
  try {
    const deliver = payload.data;

    yield call(api.put, 'delivers', deliver);

    toast.success('Entrega atualizada com sucesso!');
    history.push('/delivers');
  } catch (error) {
    toast.error('Erro ao atualizar entrega, verifique os dados...');
  }
}

export default all([
  takeLatest('@deliver/CREATE_DELIVER_REQUEST', createDeliver),
  takeLatest('@deliver/UPDATE_DELIVER_REQUEST', updateDeliver),
]);
