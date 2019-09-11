import React from 'react';

import { useSelector } from 'react-redux';
import { selectItemCount } from '../../redux/cart/cart.selectors';

import Header from './header.component';

const HeaderContainer = props => {
  const itemCount = useSelector(selectItemCount);

  return <Header itemCount={itemCount} {...props} />;
};

export default HeaderContainer;
