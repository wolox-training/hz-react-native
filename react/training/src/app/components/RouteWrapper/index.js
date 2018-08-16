import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Login from '~screens/Login';

import Game from '~screens/Game';

import PrivateRoute from './components/PrivateRoute';

class RouteWrapper extends Component {
  isAuth = () => !!(localStorage.getItem('token') || this.props.auth);

  handleLoginRoute = () => (this.isAuth() ? <Redirect to="/" /> : <Login />);

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/login" render={this.handleLoginRoute} />
          <PrivateRoute path="/" exact userAuth={this.isAuth} component={Game} />
        </Switch>
      </Router>
    );
  }
}

RouteWrapper.propTypes = {
  auth: PropTypes.shape({
    id: PropTypes.number,
    email: PropTypes.string
  })
};

const mapStateToProps = state => ({
  auth: state.auth.auth
});

export default connect(mapStateToProps)(RouteWrapper);
