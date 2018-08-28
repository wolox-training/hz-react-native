import React, { Component, Fragment } from 'react';

import lines from '~constants';

import Board from './components/Board';
import Button from './components/Button';
import style from './styles.scss';

class Game extends Component {
  state = {
    history: [{ squares: Array(9).fill(null) }],
    stepNumber: 0,
    xIsNext: true
  };

  getConst = () => {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = this.calculateWinner(current.squares);
    const moves = history.map((step, move) => {
      const desc = move ? `Go to move #${move}` : 'Go to game start';
      return (
        <Button
          key={`autoKey-${move + 1}`}
          className={style.buttonHistory}
          onClick={this.jumpTo}
          clickParam={move}
          content={desc}
        />
      );
    });
    return { current, winner, moves };
  };

  getStatus = squares => {
    const winner = this.calculateWinner(squares);
    let status;
    if (winner) {
      status = `Winner: ${winner.player}`;
    } else if (this.state.stepNumber === squares.length) {
      status = `Nobody wins`;
    } else {
      status = `Next player: ${this.state.xIsNext ? 'X' : 'O'}`;
    }
    return status;
  };

  handleClick = i => {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (this.calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{ squares }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    });
  };

  calculateWinner = squares => {
    for (let i = 0; i < lines.length; i += 1) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return { player: squares[a], position: [a, b, c] };
      }
    }
    return null;
  };

  jumpTo = step => {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0
    });
  };

  render() {
    const { current, winner, moves } = this.getConst();

    return (
      <Fragment>
        <h1 className={style.title}>tic tac toe</h1>
        <div className={style.game}>
          <div className={style.gameBoard}>
            <Board squares={current.squares} winner={winner} onClick={this.handleClick} />
          </div>
          <div className={style.gameInfo}>
            <h2 className={style.status}>{this.getStatus(current.squares)}</h2>
            <div className={style.listButtonsHistory}>{moves}</div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Game;
