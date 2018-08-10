import React, { Component } from 'react';
import PropTypes from 'prop-types';

import style from './styles.scss';

export default class Square extends Component {
  render() {
    return <button className={style.square}>{this.props.value}</button>;
  }
}

Square.propTypes = {
  value: PropTypes.number.isRequired
};
