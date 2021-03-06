import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import style from './styles.scss';

const RenderField = ({ input, id, type, meta: { touched, error } }) => {
  const hasError = touched && (error && <div className={style.messageError}>{error}</div>);
  return (
    <Fragment>
      <input
        {...input}
        id={id}
        type={type}
        className={`${style.inputControl} ${hasError ? style.error : ''}`}
      />
      {hasError}
    </Fragment>
  );
};

RenderField.propTypes = {
  input: PropTypes.shape(),
  id: PropTypes.string,
  type: PropTypes.string.isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.true,
    error: PropTypes.string
  })
};

export default RenderField;
