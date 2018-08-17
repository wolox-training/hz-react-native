import React, { Component } from 'react';
import PropTypes from 'prop-types';

import style from './styles.scss';

class Login extends Component {
  handleClick = () => {
    this.props.history.push('/game');
  };

  render() {
    return (
      <div className={style.loginContainer}>
        <form className={style.formLogin}>
          <img
            className={style.imgLogin}
            src="https://www.wolox.com.ar/assets/img-logo-wolox-color-93cbcc9f2c.svg"
            alt="Wolox Logo"
          />
          <div className={style.controlForm}>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" />
          </div>
          <div className={style.controlForm}>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
          </div>
          <button className={style.buttonSend} onClick={this.handleClick}>
            send
          </button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func
  })
};

export default Login;
