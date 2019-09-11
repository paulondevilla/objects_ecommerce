import { SHOP_DATA as data } from './shop.data';

const INITIAL_DATA = {
  collections: data
};

const shopReducer = (state = INITIAL_DATA, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopReducer;
