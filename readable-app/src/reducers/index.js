import { combineReducers } from 'redux';
import { GET_CATEGORIES } from '../actions/categories';
import { GET_POSTS } from '../actions/posts';

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

/**
 * Posts Reducer
 */
function posts(state = [], action) {
  switch (action.type) {
    case GET_POSTS:
      return action.posts;
    default:
      return state;
  }
}

export default combineReducers({
  categories,
  posts
});
