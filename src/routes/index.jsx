import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import path from './path';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import Settings from '../pages/Settings';
import PageNotFound from '../pages/PageNotFound';

const Routes = () => (
  <Router>
    <Switch>
      <Route path={path.root} exact component={Dashboard} />
      <Route path={path.login} exact component={Login} />
      <Route path={path.settings} exact component={Settings} />
      <Route component={PageNotFound} />
    </Switch>
  </Router>
);

export default Routes;
