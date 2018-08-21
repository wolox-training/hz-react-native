import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import preferencesActions from '~redux/Preferences/action';

import Layout from './layout';

class Preferences extends Component {
  componentDidMount() {
    this.props.loadUserData(localStorage.getItem('idUser'));
  }

  handleSubmit = async values => {
    this.props.updateUser(localStorage.getItem('idUser'), values);
  };

  render() {
    return (
      <Layout
        initialValues={this.props.initialValues}
        success={this.props.success}
        showError={this.props.hasError}
        onSubmit={this.handleSubmit}
      />
    );
  }
}

Preferences.propTypes = {
  hasError: PropTypes.bool,
  initialValues: PropTypes.shape({
    name: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string,
    repeatPassword: PropTypes.string
  }),
  loadUserData: PropTypes.func.isRequired,
  updateUser: PropTypes.func,
  success: PropTypes.bool
};

const mapStateToProps = state => ({
  initialValues: state.preferences.data,
  hasError: state.preferences.hasError,
  success: state.preferences.success
});

const mapDispatchToProps = dispatch => ({
  loadUserData: idUser => dispatch(preferencesActions.getUser(idUser)),
  updateUser: (idUser, data) => dispatch(preferencesActions.updateUser(idUser, data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Preferences);
