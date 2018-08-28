import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';

import Input from '~components/Input';

import RadioButtonBackGround from './components/RadioButtonBackGround';
import validate from './validate';
import style from './styles.scss';

function Layout(props) {
  return (
    <form className={style.formPreferences} onSubmit={props.handleSubmit}>
      <Input label="Name" name="name" type="text" id="name" />
      <Input label="Last Name" name="lastName" type="text" id="lastName" />
      <Input label="Email" name="email" type="text" id="email" />
      <Input label="Password" name="password" type="password" id="password" />
      <Input label="Repeat Password" name="repeatPassword" type="password" id="repeatPassword" />
      <div className={style.containerTheme}>
        <RadioButtonBackGround name="theme" id="theme1" value="fibre" />
        <RadioButtonBackGround name="theme" id="theme2" value="carbon" />
        <RadioButtonBackGround name="theme" id="theme3" value="chocolate" />
      </div>
      <button className={style.buttonUpdate} type="submit">
        update
      </button>
      {props.showError && <div className={style.errorInformation}>Invalid data</div>}
      {props.dataUpdated && <div className={style.successInformation}>Data updated</div>}
    </form>
  );
}

Layout.propTypes = {
  handleSubmit: PropTypes.func,
  showError: PropTypes.bool,
  dataUpdated: PropTypes.bool
};

export default reduxForm({ form: 'preferencesForm', validate, enableReinitialize: true })(Layout);
