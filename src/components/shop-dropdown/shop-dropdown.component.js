import React, { useRef, useEffect } from 'react';

import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import {
  selectShopCategories,
  selectIsDropdownOpen
} from '../../redux/header/header.selectors';
import { toggleDropdown } from '../../redux/header/header.actions';

import './shop-dropdown.styles.scss';

const ShopDropdown = ({ match }) => {
  const categories = useSelector(selectShopCategories);
  const isDropdownOpen = useSelector(selectIsDropdownOpen);
  const dispatch = useDispatch();
  const dropdown = useRef();

  useEffect(() => {
    const handleOutsideClick = e => {
      if (
        dropdown.current.contains(e.target) ||
        e.target.classList[0] === 'dropdown-button' ||
        e.target.parentNode.classList[0] === 'dropdown-button'
      )
        return;

      dispatch(toggleDropdown());
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [dispatch, isDropdownOpen]);

  return (
    <div ref={dropdown} className="shop-dropdown">
      {categories.map(({ id, title, categoryUrl }) => (
        <Link
          key={id}
          to={`${match.url}${categoryUrl}`}
          onClick={() => dispatch(toggleDropdown())}
          className="dropdown-options">
          {title}
        </Link>
      ))}
    </div>
  );
};

export default ShopDropdown;
