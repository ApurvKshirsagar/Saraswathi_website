import React from 'react';
import '../styles/Board.css';

const Board = ({ color1, color2, content }) => {
  return (
    <div
      className='board'
      style={{
        background: `linear-gradient(45deg,${color1}, ${color2})`,
      }}
    >
      <div className='board-content'>{content}</div>
    </div>
  );
};

export default Board;
