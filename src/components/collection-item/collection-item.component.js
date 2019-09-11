import React from 'react';

import CustomButton from '../custom-button/custom-button.component';

import './collection-item.styles.scss';

const CollectionItem = ({ item, addItem }) => {
  return (
    <div className="collection-item">
      <div className="item-image-container">
        <img src={item.imageUrl} alt="" className="item-image" />
      </div>
      <div className="collection-item-footer">
        <span className="item-title">{item.name}</span>
        <span className="item-price">${item.price}</span>
      </div>
      <CustomButton inverted onClick={() => addItem(item)}>
        Add To Cart
      </CustomButton>
    </div>
  );
};

export default CollectionItem;
