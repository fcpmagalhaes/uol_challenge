import React from 'react';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Login from './pages/login';
import Logged from './pages/logged';

function Routes() {
  return (
    <Router>
      <Route render={({ location }) => (
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            timeout={300}
            classNames='fade'
          >
            <Switch location={ location }>
              <Route path="/" exact component={Login} />
              <Route path="/logged" component={Logged} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )}/>
    </Router>
  );
}

export default Routes;

