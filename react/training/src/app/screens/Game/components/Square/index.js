import React from 'react';
import PropTypes from 'prop-types';

import style from './styles.scss';

export default function Square(props) {
  return (
    <button className={style.square} onClick={props.onClick}>
      {props.value}
    </button>
  );
}

Square.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func.isRequired
};
