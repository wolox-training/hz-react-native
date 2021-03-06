import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import preferencesActions from '~redux/Preferences/action';

import Layout from './layout';

class Preferences extends Component {
  componentDidMount() {
    this.props.loadUserData();
  }

  handleSubmit = values => {
    this.props.updateUser(values);
  };

  render() {
    return (
      <Layout
        initialValues={this.props.initialValues}
        dataUpdated={this.props.dataUpdated}
        showError={this.props.hasError}
        loading={this.props.loading}
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
  dataUpdated: PropTypes.bool,
  loading: PropTypes.bool
};

const mapStateToProps = state => ({
  initialValues: state.preferences.userData,
  hasError: state.preferences.userDataError,
  dataUpdated: state.preferences.userDataUpdated,
  loading: state.preferences.userDataLoading
});

const mapDispatchToProps = dispatch => ({
  loadUserData: () => dispatch(preferencesActions.getUser()),
  updateUser: data => dispatch(preferencesActions.updateUser(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Preferences);
