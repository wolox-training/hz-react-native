import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import Square from '../Square';

import style from './styles.scss';

export default class Board extends Component {
  renderSquare = i => {
    let highlight = false;
    if (this.props.winner) {
      highlight = this.props.winner.position.find(index => index === i) !== undefined;
    }
    return (
      <Square value={this.props.squares[i]} highlight={highlight} onClick={() => this.props.onClick(i)} />
    );
  };

  render() {
    return (
      <Fragment>
        <div className={style.boardRow}>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className={style.boardRow}>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className={style.boardRow}>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </Fragment>
    );
  }
}

Board.propTypes = {
  squares: PropTypes.arrayOf(PropTypes.string),
  onClick: PropTypes.func.isRequired,
  winner: PropTypes.objectOf(PropTypes.any)
};
