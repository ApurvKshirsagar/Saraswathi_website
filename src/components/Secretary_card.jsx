import React from 'react';
import '../styles/Secretary_card.css';

const Secretary_card = ({ name, position, onClick }) => {
  return (
    <div className='secy' onClick={onClick}>
      <h2>{name}</h2>
      <div className='card-row'>
        <h3>{position}</h3>
        {/* <a href='#'>Know more &#8594;</a> */}
      </div>
    </div>
  );
};

export default Secretary_card;
