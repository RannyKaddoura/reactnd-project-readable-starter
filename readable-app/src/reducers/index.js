import { combineReducers } from 'redux';
import { GET_CATEGORIES } from '../actions/categories';

/**
 * Categories reducer
 */
function categories(state = [], action) {
  switch (action.type) {
    case GET_CATEGORIES:
      return action.categories;
    default:
      return state;
  }
}

export default combineReducers({
  categories
});
