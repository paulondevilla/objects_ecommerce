import { CATEGORIES_DATA as data } from './categories.data';
import { headerActionTypes } from './header.types';

const INITIAL_DATA = {
  categories: data,
  isDropdownOpen: false
};

const headerReducer = (state = INITIAL_DATA, action) => {
  switch (action.type) {
    case headerActionTypes.TOGGLE_DROPDOWN:
      return {
        ...state,
        isDropdownOpen: !state.isDropdownOpen
      };

    default:
      return state;
  }
};

export default headerReducer;
