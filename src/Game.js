import React, { useState, useEffect } from 'react';
import HeaderNav from './components/HeaderNav';
import './Game.css';

const TicTacToeGame = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState('X');
  const [gameOver, setGameOver] = useState(false);
  const [showResetButton, setShowResetButton] = useState(false);
  
  useEffect(() => {
    // 當玩家為'O'時，讓電腦下棋
    if (player === 'O' && !gameOver) {
      makeComputerMove();
    }
  }, [player]);

  const handleClick = (index) => {
    if (board[index] === null && !gameOver) {
      const newBoard = [...board];
      newBoard[index] = player;
      setBoard(newBoard);

      if (checkWinner(newBoard, player)) {
        setGameOver(true);
        setShowResetButton(true); // 有勝利者，顯示重玩按鈕
        return;
      }

      setPlayer(player === 'X' ? 'O' : 'X');
    }
  };
  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setPlayer('X');
    setGameOver(false);
    setShowResetButton(false);
  };
  //AI cal step
  const makeComputerMove = () => {
    const bestMove = findBestMove(board, player);
    handleClick(bestMove);
  };
  
  const findBestMove = (board, currentPlayer) => {
    let bestScore = -Infinity;
    let bestMove;
  
    for (let i = 0; i < board.length; i++) {
      if (board[i] === null) {
        const newBoard = [...board];
        newBoard[i] = currentPlayer;
  
        const score = minimax(newBoard, 0, false);
        if (score > bestScore) {
          bestScore = score;
          bestMove = i;
        }
      }
    }
  
    return bestMove;
  };
  
  const minimax = (board, depth, isMaximizingPlayer) => {
    // 終止條件
    if (checkWinner(board, 'X')) {
      return -10 + depth; // 如果玩家X贏，返回-10 + 深度
    } else if (checkWinner(board, 'O')) {
      return 10 - depth; // 如果玩家O贏，返回10 - 深度
    } else if (isBoardFull(board)) {
      return 0; // 平局返回0
    }
  
    if (isMaximizingPlayer) {
      let maxScore = -Infinity;
      for (let i = 0; i < board.length; i++) {
        if (board[i] === null) {
          const newBoard = [...board];
          newBoard[i] = 'O';
          const score = minimax(newBoard, depth + 1, false);
          maxScore = Math.max(maxScore, score);
        }
      }
      return maxScore;
    } else {
      let minScore = Infinity;
      for (let i = 0; i < board.length; i++) {
        if (board[i] === null) {
          const newBoard = [...board];
          newBoard[i] = 'X';
          const score = minimax(newBoard, depth + 1, true);
          minScore = Math.min(minScore, score);
        }
      }
      return minScore;
    }
  };
  
  const isBoardFull = (board) => {
    return board.every((value) => value !== null);
  };

  //AI cal step end


  const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // 橫行
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // 列
    [0, 4, 8], [2, 4, 6] // 對角線
  ];
  
  const checkWinner = (board, currentPlayer) => {
    for (let i = 0; i < winningCombos.length; i++) {
      const [a, b, c] = winningCombos[i];
      if (board[a] === currentPlayer && board[b] === currentPlayer && board[c] === currentPlayer) {
        return true; // 有勝利者
      }
    }
    return false; // 無勝利者
  };

  const renderSquare = (index) => {
    return (
      <button className="square" onClick={() => handleClick(index)}>
        {board[index]}
      </button>
    );
  };

  return (
    <div>
        <HeaderNav/>

            <div className="game-board">
                <div className="board-row">
                    {renderSquare(0)}
                    {renderSquare(1)}
                    {renderSquare(2)}
                </div>
                <div className="board-row">
                    {renderSquare(3)}
                    {renderSquare(4)}
                    {renderSquare(5)}
                </div>
                <div className="board-row">
                    {renderSquare(6)}
                    {renderSquare(7)}
                    {renderSquare(8)}
                </div>
            {showResetButton && <button onClick={resetGame}>重新開始</button>}
        </div>

</div>   

  );
};

export default TicTacToeGame;
