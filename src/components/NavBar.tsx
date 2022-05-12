import React from 'react';
import { NavLink } from 'react-router-dom';
import { Links, ListNavLinks, NavBar, TextLink } from '../styles/styles';

export const Navbar: React.FC = () => (
  <NavBar>
    <ListNavLinks>
      <Links>
        <NavLink to="/">
          <TextLink>Конвертер</TextLink>
        </NavLink>
      </Links>
      <Links>
        <NavLink to="/about">
          <TextLink>Курс обміну</TextLink>
        </NavLink>
      </Links>
    </ListNavLinks>
  </NavBar>
);
