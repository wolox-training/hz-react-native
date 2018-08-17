import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Layout from './layout';

class Login extends Component {
  handleSubmit = () => {
    // do something with values
    this.props.history.push('/game');
  };

  render() {
    return <Layout onSubmit={this.handleSubmit} />;
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func
  })
};

export default Login;
