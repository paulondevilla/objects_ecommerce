import React from 'react';

import { useSelector } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selectors';

import CollectionPage from './collection.component';

const CollectionPageContainer = ({ match }) => {
  const matchedCollection = useSelector(state =>
    selectCollection(match.params.collectionId)(state)
  );

  return <CollectionPage collection={matchedCollection} />;
};

export default CollectionPageContainer;
