// react library
import React from 'react';

// images
import ZeroLogo from '../../assets/Zero.png';

// styles
import './NavBar.scss'

const NavBar = () => {
  return (
    <header className="navbar-container">
      <div className="navbar-container__content">
        <div className="navbar-container__content__logo">
          <img src={ZeroLogo} alt="org-zero-logo" width="100" />
        </div>
        <nav>
          <ul className="navbar-container__content__items">
            <li>About</li>
            <li>FAQs</li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default NavBar;
