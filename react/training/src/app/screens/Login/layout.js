import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';

import Input from '~components/Input';

import style from './styles.scss';

const validate = values => {
  const errors = {};

  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length < 8) {
    errors.password = 'Must be more the 8 characters';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  return errors;
};

function Layout(props) {
  return (
    <div className={style.loginContainer}>
      <form className={style.formLogin} onSubmit={props.handleSubmit}>
        <img
          className={style.imgLogin}
          src="https://www.wolox.com.ar/assets/img-logo-wolox-color-93cbcc9f2c.svg"
          alt="Wolox Logo"
        />
        <Input label="Email" name="email" type="text" id="email" />
        <Input label="Password" name="password" type="password" id="password" />
        <button className={style.buttonSend} type="submit">
          send
        </button>
        {props.showError && <div className={style.errorInformation}>Invalid data</div>}
      </form>
    </div>
  );
}

Layout.propTypes = {
  handleSubmit: PropTypes.func,
  showError: PropTypes.bool
};

export default reduxForm({ form: 'loginForm', validate })(Layout);
