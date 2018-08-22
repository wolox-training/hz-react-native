import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import authActions from '~redux/Auth/action';

import Loader from '~components/Loader';

import Layout from './layout';

class Login extends Component {
  handleSubmit = async values => {
    this.props.authUser(values);
  };

  render() {
    return <Layout showError={this.props.hasError} onSubmit={this.handleSubmit} />;
  }
}

Login.propTypes = {
  authUser: PropTypes.func,
  hasError: PropTypes.bool
};

const mapStateToProps = state => ({
  loading: state.auth.signInLoading,
  hasError: state.auth.signInError
});

const mapDispatchToProps = dispatch => ({
  authUser: user => dispatch(authActions.authUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Loader(Login));
