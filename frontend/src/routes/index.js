import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Login from '~/pages/Login';
import Register from '~/pages/Register';

import DeliversNew from '~/pages/Delivers/DeliversNew';
import Delivers from '~/pages/Delivers';
import Epis from '~/pages/Epis';
import EpisNew from '~/pages/Epis/EpisNew';
import Listdelivers from '~/pages/Listdelivers';
import Listepis from '~/pages/Listepis';
import Modules from '~/pages/Modules';
import Reports from '~/pages/Reports';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/modules" component={Modules} isPrivate />
      <Route path="/delivers" component={Delivers} isPrivate />
      <Route path="/epis" component={Epis} isPrivate />
      <Route path="/epis/:epiId" component={Epis} isPrivate />
      <Route path="/episnew" component={EpisNew} isPrivate />
      <Route path="/listdelivers" component={Listdelivers} isPrivate />
      <Route path="/delivers/:deliverId" component={Delivers} isPrivate />
      <Route path="/deliversnew" component={DeliversNew} isPrivate />
      <Route path="/listepis" component={Listepis} isPrivate />
      <Route path="/reports" component={Reports} isPrivate />
      <Route path="/register" component={Register} />
    </Switch>
  );
}
