import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import ROUTES from '~constants/routes';

import authActions from '~redux/Auth/action';

import styles from './styles.scss';

function TopBar({ logout }) {
  return (
    <nav className={styles.navbar}>
      <Link className={styles.linkImage} to={ROUTES.HOME}>
        <img src="https://www.wolox.com.ar/assets/img-logo-wolox-color-93cbcc9f2c.svg" alt="Wolox Logo" />
      </Link>
      <div className={styles.containerLink}>
        <Link className={styles.navbarItem} to={ROUTES.PREFERENCES}>
          Preferences
        </Link>
        <button className={styles.navbarItem} onClick={logout}>
          Logout
        </button>
      </div>
    </nav>
  );
}

TopBar.propTypes = {
  logout: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(authActions.logout())
});

export default connect(
  null,
  mapDispatchToProps
)(TopBar);
