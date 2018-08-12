import React, { Component, Fragment } from 'react';

import Board from './components/Board';
import style from './styles.scss';

function calculateWinner(squares) {
  const lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
  for (let i = 0; i < lines.length; i += 1) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { player: squares[a], position: [a, b, c] };
    }
  }
  return null;
}

export default class Game extends Component {
  state = {
    history: [{ squares: Array(9).fill(null) }],
    stepNumber: 0,
    xIsNext: true
  };

  handleClick = i => {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{ squares }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    });
  };

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
    const moves = history.map((step, move) => {
      const desc = move ? `Go to move #${move}` : 'Go to game start';
      return (
        <button className={style.buttonHistory} key={`autoKey-${move + 1}`} onClick={() => this.jumpTo(move)}>
          {desc}
        </button>
      );
    });
    let status;
    if (winner) {
      status = `Winner: ${winner.player}`;
    } else if (this.state.stepNumber === current.squares.length) {
      status = `Nobody wins`;
    } else {
      status = `Next player: ${this.state.xIsNext ? 'X' : 'O'}`;
    }

    return (
      <Fragment>
        <h1 className={style.title}>tic tac toe</h1>
        <div className={style.game}>
          <div className={style.gameBoard}>
            <Board squares={current.squares} winner={winner} onClick={i => this.handleClick(i)} />
          </div>
          <div className={style.gameInfo}>
            <h2 className={style.status}>{status}</h2>
            <div className={style.listButtonsHistory}>{moves}</div>
          </div>
        </div>
      </Fragment>
    );
  }
}
