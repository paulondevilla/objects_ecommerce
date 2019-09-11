import React from 'react';
import { Route } from 'react-router-dom';

import { default as CollectionsOverview } from '../../components/collections-overview/collections-overview.container';
import { default as CollectionPage } from '../collection/collection.container';

const ShopPage = ({ match }) => {
  return (
    <div className="shop">
      <Route exact path={`${match.path}/all`} component={CollectionsOverview} />
      <Route
        path={`${match.path}/collections/:collectionId`}
        component={CollectionPage}
      />
    </div>
  );
};

export default ShopPage;
