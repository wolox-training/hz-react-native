import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import AuthService from '~services/AuthService';

class PrivateRoute extends Component {
  renderContent = () => {
    const { component: RenderComponent } = this.props;
    const token = localStorage.getItem('token');
    if (token) {
      AuthService.setToken(token);
      return <RenderComponent />;
    }
    return <Redirect to="/login" />;
  };

  render() {
    const { component: RenderComponent, ...rest } = this.props;
    return <Route {...rest} render={this.renderContent} />;
  }
}

PrivateRoute.propTypes = {
  component: PropTypes.func
};

export default PrivateRoute;
