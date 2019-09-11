import React from 'react';

import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';

import CollectionItem from './collection-item.component';

const CollectionItemContainer = props => {
  const dispatch = useDispatch();

  return (
    <CollectionItem addItem={item => dispatch(addItem(item))} {...props} />
  );
};

export default CollectionItemContainer;
