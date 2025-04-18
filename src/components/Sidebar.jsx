// components/Sidebar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Search } from 'react-bootstrap-icons'; // Icone Bootstrap
import { HouseDoor, Grid1x2, Broadcast } from 'react-bootstrap-icons';
import './Sidebar.css'; // Per lo stile custom opzionale

function Sidebar() {
  return (
    <div className="bg-dark text-white d-flex flex-column p-4 vh-100" style={{ width: '250px' }}>
      <h2 className="fw-bold mb-4">
        <i className="bi bi-apple"></i> Music
      </h2>

      <div className="input-group mb-4">
        <span className="input-group-text bg-secondary border-0">
          <Search color="red" />
        </span>
        <input type="text" className="form-control bg-secondary border-0 text-white" placeholder="Cerca" />
      </div>

      <nav className="nav flex-column gap-2">
        <NavLink
          to="/"
          className="nav-link text-white d-flex align-items-center"
          activeclassname="active"
        >
          <HouseDoor className="me-2" color="red" />
          Home
        </NavLink>

        <NavLink
          to="/novita"
          className="nav-link text-white d-flex align-items-center"
          activeclassname="active"
        >
          <Grid1x2 className="me-2" color="red" />
          Novità
        </NavLink>

        <NavLink
          to="/radio"
          className="nav-link text-white d-flex align-items-center"
          activeclassname="active"
        >
          <Broadcast className="me-2" color="red" />
          Radio
        </NavLink>
      </nav>
    </div>
  );
}

export default Sidebar;
