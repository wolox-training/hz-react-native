import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import preferencesActions from '~redux/Preferences/action';

import Loader from '~components/Loader';

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
        dataUpdated={this.props.dataUpdated}
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
  dataUpdated: PropTypes.shape({
    name: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string,
    repeatPassword: PropTypes.string
  })
};

const mapStateToProps = state => ({
  initialValues: state.preferences.userData,
  hasError: state.preferences.userDataError,
  dataUpdated: state.preferences.userDataUpdated,
  loading: state.preferences.userDataLoading
});

const mapDispatchToProps = dispatch => ({
  loadUserData: idUser => dispatch(preferencesActions.getUser(idUser)),
  updateUser: (idUser, data) => dispatch(preferencesActions.updateUser(idUser, data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Loader(Preferences));
