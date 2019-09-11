import React, { useState } from 'react';
import { withRouter, Link } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { selectShopCategories } from '../../redux/header/header.selectors';

import './header.styles.scss';

const Header = ({ match, itemCount }) => {
  const [showDropdown, toggleDropdown] = useState(false);
  const categories = useSelector(selectShopCategories);

  return (
    <header className="header">
      <div className="logo-container">
        <h1 className="logo">Objects</h1>
      </div>

      <nav
        className={`options-container ${
          showDropdown ? 'dropdown-visible' : ''
        }`}>
        <Link to="/" className="option">
          Home
        </Link>
        <div onClick={() => toggleDropdown(!showDropdown)} className="option">
          Shop{' '}
          {showDropdown ? (
            <i className="fas fa-chevron-up dropdown-arrow" />
          ) : (
            <i className="fas fa-chevron-down dropdown-arrow" />
          )}
        </div>
        <Link to="/cart" className="option">
          Cart
          <span className="item-count">{itemCount}</span>
        </Link>

        {showDropdown ? (
          <div className="dropdown-container">
            {categories.map(({ id, title, categoryUrl }) => (
              <Link
                key={id}
                to={`${match.url}${categoryUrl}`}
                onClick={() => toggleDropdown(false)}
                className="dropdown-options">
                {title}
              </Link>
            ))}
          </div>
        ) : null}
      </nav>
    </header>
  );
};

export default withRouter(Header);
