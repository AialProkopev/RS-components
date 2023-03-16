import React from 'react';
import { NavLink } from 'react-router-dom';

interface isActiveLink {
  isActive: boolean;
}

class Header extends React.Component {
  isActiveLink = ({ isActive }: isActiveLink) =>
    isActive ? 'navigation__item_active' : 'navigation__item';
  render() {
    return (
      <header className="header">
        <nav className="navigation">
          <NavLink to="/" className={this.isActiveLink}>
            Home
          </NavLink>
          <NavLink to="/about" className={this.isActiveLink}>
            About Us
          </NavLink>
        </nav>
      </header>
    );
  }
}

export default Header;
