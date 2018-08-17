import React, { Component } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import Login from '~screens/Login';

import Game from '~screens/Game';

import PrivateRoute from './components/PrivateRoute';

const ROUTES = {
  LOGIN: '/login',
  HOME: '/'
};

class RouteWrapper extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <PrivateRoute isPublicRoute exact path={ROUTES.LOGIN} component={Login} />
          <PrivateRoute isPrivateRoute path={ROUTES.HOME} component={Game} />
        </Switch>
      </Router>
    );
  }
}

export default RouteWrapper;
