import React, { Component } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import Login from '~screens/Login';

import Home from '~screens/Home';

import ROUTES from '~constants/routes';

import PrivateRoute from './components/PrivateRoute';

class RouteWrapper extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <PrivateRoute isPublicRoute exact path={ROUTES.LOGIN} component={Login} />
          <PrivateRoute isPrivateRoute path={ROUTES.HOME} component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default RouteWrapper;
