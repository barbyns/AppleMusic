import React from 'react';
import { Broadcast } from 'react-bootstrap-icons';

function Radio() {
  return (
    <div className="container">
      <h1 className="mb-4 d-flex align-items-center">
        <Broadcast className="me-2" size={32} /> Radio
      </h1>
      <p>Ascolta le stazioni radio selezionate per te! 📡</p>
    </div>
  );
}

export default Radio;
