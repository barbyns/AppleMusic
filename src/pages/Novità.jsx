import React from 'react';
import { Grid1x2 } from 'react-bootstrap-icons'; // Import icona

function Novità() {
  return (
    <div className="container">
      <h1 className="mb-4 d-flex align-items-center">
        <Grid1x2 className="me-2" size={32} /> Novità
      </h1>
      <p>Scopri le nuove uscite e i nuovi episodi radio! 🚀</p>
    </div>
  );
}

export default Novita;
