import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import RenderField from './components/RenderField';
import style from './styles.scss';

function Input(props) {
  const { label, id, ...inputProps } = props;
  return (
    <div className={style.controlForm}>
      <label htmlFor={id}>{label}</label>
      <Field {...inputProps} id={id} component={RenderField} />
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default Input;
