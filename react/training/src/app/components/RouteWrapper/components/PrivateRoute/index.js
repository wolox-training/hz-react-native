import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import AuthService from '~services/AuthService';

const DEFAULT_PRIVATE_ROUTE = '/';
const DEFAULT_PUBLIC_ROUTE = '/login';

class PrivateRoute extends Component {
  isAuth = () => !!(localStorage.getItem('token') || this.props.auth);

  renderContent = ({ ...routeProps }) => {
    const { isPublicRoute, isPrivateRoute, component: Comp } = this.props;
    if (this.isAuth() && isPublicRoute) {
      AuthService.setToken(localStorage.getItem('token'));
      // do not allow logged users to access public routes. redirect to app
      return (
        <Redirect
          to={{
            pathname: DEFAULT_PRIVATE_ROUTE,
            state: { from: this.props.location }
          }}
        />
      );
    } else if (!this.isAuth() && isPrivateRoute) {
      // do not allow unlogged users to access app. redirect to signin
      return (
        <Redirect
          to={{
            pathname: DEFAULT_PUBLIC_ROUTE,
            state: { from: this.props.location }
          }}
        />
      );
    }
    return <Comp {...routeProps} />;
  };

  render() {
    const { isPublicRoute, isPrivateRoute, auth, component: Comp, ...props } = this.props;
    return <Route {...props} render={this.renderContent} />;
  }
}

PrivateRoute.propTypes = {
  auth: PropTypes.bool,
  component: PropTypes.func,
  isPrivateRoute: PropTypes.bool,
  isPublicRoute: PropTypes.bool,
  location: PropTypes.shape({
    hash: PropTypes.string,
    key: PropTypes.string,
    pathname: PropTypes.string,
    search: PropTypes.string
  })
};

const mapStateToProps = state => ({
  auth: state.auth.signIn
});

export default connect(mapStateToProps)(PrivateRoute);
