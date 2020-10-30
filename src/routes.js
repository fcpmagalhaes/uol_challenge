import React from 'react';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';

import Login from './pages/login';
import Logged from './pages/logged';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/logged" component={Logged} />
      </Switch>
    </Router>
  );
}

export default Routes;

