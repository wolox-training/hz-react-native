import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import style from './styles.scss';

export default class Square extends Component {
  state = {
    value: null
  };

  render() {
    return (
      <button className={style.square} onClick={() => this.setState({ value: 'X' })}>
        {this.state.value}
      </button>
    );
  }
}

/*
Square.propTypes = {
  value: PropTypes.number.isRequired
};
*/
