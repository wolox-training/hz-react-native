import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

function Loader(WrappedComponent) {
  class Cmp extends Component {
    render() {
      return this.props.loading ? (
        <div className={styles.loader}>
          <h4 className={styles.loaderText}>Loading...</h4>
        </div>
      ) : (
        <WrappedComponent {...this.props} />
      );
    }
  }

  Cmp.propTypes = {
    loading: PropTypes.bool
  };

  return Cmp;
}

export default Loader;
