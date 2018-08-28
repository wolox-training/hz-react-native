import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import authActions from '~redux/Auth/action';

import Layout from './layout';

class Login extends Component {
  handleSubmit = async values => {
    this.props.authUser(values);
  };

  render() {
    return this.props.loading ? (
      <div>Loading ... </div>
    ) : (
      <Layout showError={this.props.hasError} onSubmit={this.handleSubmit} />
    );
  }
}

Login.propTypes = {
  authUser: PropTypes.func,
  hasError: PropTypes.bool,
  loading: PropTypes.bool
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
)(Login);
