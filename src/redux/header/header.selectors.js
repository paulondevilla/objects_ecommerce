import { createSelector } from 'reselect';

const selectHeader = state => state.header;

export const selectShopCategories = createSelector(
  [selectHeader],
  header => header.categories
);
