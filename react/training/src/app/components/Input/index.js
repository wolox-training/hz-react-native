import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import style from './styles.scss';

const RenderField = ({ input, type, meta: { touched, error } }) => {
  const hasError = touched && (error && <div className={style.messageError}>{error}</div>);

  return (
    <Fragment>
      <input {...input} type={type} className={`${style.inputControl} ${hasError ? style.error : ''}`} />
      {hasError}
    </Fragment>
  );
};

function Input(props) {
  const { label, id, ...inputProps } = props;
  return (
    <div className={style.controlForm}>
      <label htmlFor={id}>{label}</label>
      <Field {...inputProps} component={RenderField} />
    </div>
  );
}

RenderField.propTypes = {
  input: PropTypes.shape(),
  type: PropTypes.string.isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.true,
    error: PropTypes.string
  })
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default Input;
