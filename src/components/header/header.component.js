import React from 'react';
import { withRouter, Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { selectIsDropdownOpen } from '../../redux/header/header.selectors';
import { toggleDropdown } from '../../redux/header/header.actions';

import ShopDropdown from '../shop-dropdown/shop-dropdown.component';

import './header.styles.scss';

const Header = ({ match, itemCount }) => {
  const isDropdownOpen = useSelector(selectIsDropdownOpen);
  const dispatch = useDispatch();

  return (
    <header className="header">
      <div className="logo-container">
        <h1 className="logo">Objects</h1>
      </div>

      <nav
        className={`options-container ${
          isDropdownOpen ? 'dropdown-visible' : ''
        }`}>
        <Link to="/" className="option">
          Home
        </Link>
        <div
          onClick={() => dispatch(toggleDropdown())}
          className="dropdown-button option">
          Shop{' '}
          {isDropdownOpen ? (
            <i className="fas fa-chevron-up dropdown-arrow" />
          ) : (
            <i className="fas fa-chevron-down dropdown-arrow" />
          )}
        </div>
        <Link to="/cart" className="option">
          Cart
          <span className="item-count">{itemCount}</span>
        </Link>
      </nav>
      {isDropdownOpen && <ShopDropdown match={match} />}
    </header>
  );
};

export default withRouter(Header);
