import React from 'react';
import PropTypes from 'prop-types';

import style from './styles.scss';

export default function Square(props) {
  const classes = [style.square];
  if (props.highlight) {
    classes.push(style.highlight);
  }
  return (
    <button className={classes.join(' ')} onClick={props.onClick}>
      {props.value}
    </button>
  );
}

Square.propTypes = {
  value: PropTypes.string,
  highlight: PropTypes.bool,
  onClick: PropTypes.func.isRequired
};
