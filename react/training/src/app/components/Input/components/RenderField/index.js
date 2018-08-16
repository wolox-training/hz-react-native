import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

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

RenderField.propTypes = {
  input: PropTypes.shape(),
  type: PropTypes.string.isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.true,
    error: PropTypes.string
  })
};

export default RenderField;
