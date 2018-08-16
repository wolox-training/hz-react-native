import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import AuthService from '~services/AuthService';

import Login from '~screens/Login';

import Game from '~screens/Game';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={() => {
      const token = localStorage.getItem('token');
      if (token) {
        AuthService.setToken(token);
        return <Component />;
      }
      return <Redirect to="/" />;
    }}
  />
);

function RouteWrapper() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <PrivateRoute path="/game" component={Game} />
      </Switch>
    </Router>
  );
}

PrivateRoute.propTypes = {
  component: PropTypes.func
};

export default RouteWrapper;
