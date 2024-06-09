import React from 'react';
import '../styles/SecretaryModal.css';

const SecretaryModal = ({ isOpen, onClose, secretary }) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target.className === 'modal-overlay') {
      onClose();
    }
  };

  return (
    <div className='modal-overlay' onClick={handleOverlayClick}>
      <div className='modal-content'>
        <button className='close-button' onClick={onClose}>
          X
        </button>
        <img
          src={secretary.imageUrl}
          alt={`${secretary.name}`}
          className='secretary-image'
        />
        <div className='write-up'>
          <h2>{secretary.name}</h2>
          <h3 id='position'>{secretary.position}</h3>
          <p>{secretary.quote}</p>
          <h3>Phone Number: {secretary.Phone}</h3>
          <h3>Email: {secretary.email}</h3>
        </div>
      </div>
    </div>
  );
};

export default SecretaryModal;
