import React from 'react';

import { default as CollectionItem } from '../../components/collection-item/collection-item.container';

import './collection.styles.scss';

const CollectionPage = ({ collection }) => {
  return (
    <section className="collection">
      <header className="collection-header">
        <h1 className="collection-title">{collection.title}</h1>
      </header>
      <div className="collection-items">
        {collection.items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default CollectionPage;
