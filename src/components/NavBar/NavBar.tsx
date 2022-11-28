import React from 'react';
import {NavLink} from "react-router-dom";
import './NavBar.css';

const NavBar = () => {
  return (
    <ul>
      <li>
        <NavLink className="nav-link" to="/">Home</NavLink>
      </li>
      <li>
        <NavLink className="nav-link" to="/Skills">Skills</NavLink>
      </li>
      <li>
        <NavLink className="nav-link" to="/Contact">Contact</NavLink>
      </li>
      <li>
        <NavLink className="nav-link" to="/Project">Project</NavLink>
      </li>
    </ul>
  );
};

export default NavBar;