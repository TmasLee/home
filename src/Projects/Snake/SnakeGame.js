import React, { Component } from 'react';
import GameBoard from './GameBoard';

class SnakeGame extends Component {
  render() {
    return (
      <div className='SnakeGameBoard'>
        <GameBoard/>
      </div>
    )
  }
}

export default SnakeGame;

