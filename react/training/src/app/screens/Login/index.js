import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import authActions from '~redux/Auth/action';

import Layout from './layout';

class Login extends Component {
  componentDidMount() {
    if (localStorage.getItem('token')) {
      this.props.history.push('/game');
    }
  }

  componentDidUpdate() {
    if (this.props.auth) {
      this.props.history.push('/game');
    }
  }

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
  auth: PropTypes.bool,
  authUser: PropTypes.func,
  hasError: PropTypes.bool,
  history: PropTypes.shape({
    push: PropTypes.func
  }),
  loading: PropTypes.bool
};

const mapStateToProps = state => ({
  auth: state.auth.auth,
  loading: state.auth.loading,
  hasError: state.auth.hasError
});

const mapDispatchToProps = dispatch => ({
  authUser: user => dispatch(authActions.authUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
