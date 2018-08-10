import React, { Component, Fragment } from 'react';

import Square from '../Square';

import style from './styles.scss';

export default class Board extends Component {
  state = { squares: Array(9).fill(null) };

  handleClick = i => {
    const squares = this.state.squares.slice();
    squares[i] = 'X';
    this.setState({ squares });
  };

  renderSquare = i => <Square value={this.state.squares[i]} onClick={() => this.handleClick(i)} />;

  render() {
    const status = 'Next player: X';

    return (
      <Fragment>
        <div className={style.status}>{status}</div>
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
