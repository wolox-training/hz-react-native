import React, { Component } from 'react';

import Board from './components/Board';
import style from './styles.scss';

export default class Game extends Component {
  render() {
    return (
      <div className={style.game}>
        <div className={style.gameBoard}>
          <Board />
        </div>
        <div className={style.gameInfo}>
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}
