import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Feather } from 'react-feather';
import navBarStyles from './NavBar.module.scss';

const NavBar = () => {
  const [menuState, setMenuState] = useState({ active: false });

  const toggleMenu = () => {
    setMenuState({ active: !menuState.active });
  };

  const showMenu = menuState.active ? 'is-active' : '';

  return (
    <nav className="navbar is-black has-shadow">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item" aria-label="brand icon">
          <Feather />
        </Link>
        <Link
          to="#"
          role="button"
          className={`navbar-burger ${showMenu}`}
          aria-label="menu"
          aria-expanded="false"
          onClick={() => toggleMenu()}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </Link>
      </div>
      <div className={`navbar-menu ${showMenu}`}>
        <div className="navbar-item">
          <Link to="/" className={navBarStyles.link}>Home</Link>
        </div>
        <div className="navbar-item">
          <Link to="/about" className={navBarStyles.link}>About</Link>
        </div>
        <div className="navbar-item">
          <Link to="/articles-list" className={navBarStyles.link}>Articles</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
