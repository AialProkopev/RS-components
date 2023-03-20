import React from 'react';
import { NavLink } from 'react-router-dom';

interface isActiveLink {
  isActive: boolean;
}

class Header extends React.Component {
  state: {
    currentPage: string;
  } = {
    currentPage: '',
  };
  componentDidMount() {
    const path = location.pathname;
    if (path === '/') {
      this.setState({
        currentPage: 'Home Page',
      });
    } else if (path === '/about') {
      this.setState({
        currentPage: 'About Us Page',
      });
    } else {
      this.setState({
        currentPage: '404 Page',
      });
    }
  }

  isActiveLink = ({ isActive }: isActiveLink) =>
    isActive ? 'navigation__item navigation__item_active' : 'navigation__item';

  handleClickOnLink = (e: React.MouseEvent<HTMLAnchorElement>) => {
    this.setState({
      currentPage: e.currentTarget.innerHTML + ' Page',
    });
  };
  render() {
    return (
      <header className="header">
        <h2 className="header__title">{this.state.currentPage}</h2>
        <nav className="navigation">
          <NavLink to="/" className={this.isActiveLink} onClick={this.handleClickOnLink}>
            Home
          </NavLink>
          <NavLink to="/about" className={this.isActiveLink} onClick={this.handleClickOnLink}>
            About Us
          </NavLink>
        </nav>
      </header>
    );
  }
}

export default Header;
