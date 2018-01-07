import { combineReducers } from 'redux';
import { GET_CATEGORIES } from '../actions/categories';
import { GET_POSTS } from '../actions/posts';
import { GET_POST } from '../actions/post';
import { ADD_COMMENT, GET_COMMENTS } from '../actions/comments'
import sortBy from 'sort-by';

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

/**
 * single post reducer
 */
function post(state = {}, action) {
  switch (action.type) {
    case GET_POST:
      return action.post;
    default:
      return state;
  }
}

/**
 * comments reducer
 */
function comments(state = [], action) {
  switch (action.type) {
    case GET_COMMENTS:
      return action.comments.sort(sortBy('timestamp'));
    case ADD_COMMENT:
      const newState = state.concat([action.comment]);
      return newState.sort(sortBy('timestamp'));
    default:
      return state;
  }
}

export default combineReducers({
  categories,
  posts,
  post,
  comments
});
