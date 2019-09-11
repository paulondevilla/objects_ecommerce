import { CATEGORIES_DATA as data } from './categories.data';

const INITIAL_DATA = {
  categories: data
};

const headerReducer = (state = INITIAL_DATA, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default headerReducer;
