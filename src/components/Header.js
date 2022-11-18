import React from 'react';
import '../App';
import Nav from './Nav';

function Header(props) {
  return (
    <header>
      <h1>Jaymen Laton</h1>
      <nav>
        <Nav {...props} />
      </nav>
    </header>
  );
}

export default Header;
