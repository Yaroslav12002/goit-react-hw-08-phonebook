import React from 'react';
import { MenuLink } from './Navigtion.styled';

function Navigation() {
  return (
    <nav>
      <MenuLink to="/">Main</MenuLink>

      <MenuLink to="/contacts">Contacts</MenuLink>
    </nav>
  );
}

export default Navigation;
