import React from 'react';

import { default as CollectionItem } from '../collection-item/collection-item.container';

import './collections-overview.styles.scss';

const CollectionsOverview = ({ collections }) => {
  return (
    <div className="collections-overview">
      {collections.map(item => (
        <CollectionItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default CollectionsOverview;
