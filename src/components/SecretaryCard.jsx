import React from 'react';
import '../styles/SecretaryCard.css';

const SecretaryCard = ({ name, position, onClick }) => {
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

export default SecretaryCard;
