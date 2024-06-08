import React from 'react';
import '../styles/Achievers.css';

const Achievers = ({ name, tournament, position, imageUrl }) => {
  return (
    <div className='achiever'>
      <img src={imageUrl} alt={name} />
      <div className='description'>
        <h2>{name}</h2>
        <h2>{tournament}</h2>
        <h3>{position}</h3>
      </div>
    </div>
  );
};

export default Achievers;
