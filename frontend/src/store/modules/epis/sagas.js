import { takeLatest, call, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '~/services/history';

import api from '~/services/api';

export function* createEpi({ payload }) {
  try {
    const epi = payload.data;

    yield call(api.post, 'epis', epi);

    toast.success('EPI cadastrado com sucesso!');
  } catch (error) {
    toast.error('Erro ao cadastrar EPI, verifique os dados...');
  }
}

export function* updateEpi({ payload }) {
  try {
    const epi = payload.data;

    yield call(api.put, 'epis', epi);

    toast.success('EPI atualizada com sucesso!');
    history.push('/epis');
  } catch (error) {
    toast.error('Erro ao atualizar EPI, verifique os dados...');
  }
}

export default all([
  takeLatest('@epi/CREATE_EPI_REQUEST', createEpi),
  takeLatest('@epi/UPDATE_EPI_REQUEST', updateEpi),
]);
