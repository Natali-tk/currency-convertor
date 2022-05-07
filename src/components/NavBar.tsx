import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar: React.FC = () => (
  <nav>
    <div className="nav-wrapper  teal px1">
      <ul className="left hide-on-med-and-dow">
        <li className="nav-link">
          <NavLink to="/">Конвертер</NavLink>
        </li>
        <li className="nav-link">
          <NavLink to="/about">Курс обміну</NavLink>
        </li>
      </ul>
    </div>
  </nav>
);
