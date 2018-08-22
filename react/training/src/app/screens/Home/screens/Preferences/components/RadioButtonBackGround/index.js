import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import style from './styles.scss';

function RadioButtonBackGround(props) {
  const changeBackground = e => {
    document.querySelector('body').setAttribute('class', e.target.value);
  };

  const { id, ...inputProps } = props;
  return (
    <div className={style.radioBackground}>
      <Field {...inputProps} component="input" type="radio" id={id} onChange={changeBackground} />
      <label htmlFor={id} />
    </div>
  );
}

RadioButtonBackGround.propTypes = {
  id: PropTypes.string.isRequired
};

export default RadioButtonBackGround;
