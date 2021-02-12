import React from 'react';
import Nav from '../Nav/Nav'
import './Header.css'

function Header() {
  return (
    <header>
      <div className="text">
        <Nav />
        <h1>Kay Holten</h1>
      </div>
    </header>
  );
}

export default Header;
