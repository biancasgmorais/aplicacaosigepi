import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import epis from './epis/reducer';
import deliver from './deliver/reducer';

export default combineReducers({
  auth,
  user,
  epis,
  deliver,
});
