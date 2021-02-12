import React from 'react';
import './Nav.css'

function Nav() {
  return (
    <nav>
      <ul className="nav-list">
          <li><a href="#about-me">About Me</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
