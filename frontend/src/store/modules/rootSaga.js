import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import user from './user/sagas';
import epis from './epis/sagas';
import deliver from './deliver/sagas';

export default function* rootSaga() {
  return yield all([auth, user, epis, deliver]);
}
