import React from 'react';

import { useSelector } from 'react-redux';
import { selectAllItemsSorted } from '../../redux/shop/shop.selectors';

import CollectionsOverview from './collections-overview.component';

const CollectionsOverviewContainer = () => {
  const collections = useSelector(selectAllItemsSorted);

  return <CollectionsOverview collections={collections} />;
};

export default CollectionsOverviewContainer;
