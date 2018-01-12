import { combineReducers } from 'redux';
import { FETCH_CATEGORIES } from '../actions/categories';
import { GET_POSTS } from '../actions/posts';
import { FETCH_POST } from '../actions/post';
import { CREATE_COMMENT, DELETE_COMMENT, FETCH_COMMENTS, UPDATE_COMMENT, VOTE_COMMENT } from '../actions/comments'
import sortBy from 'sort-by';

/**
 * Categories reducer
 */
function categories(state = [], action) {
  switch (action.type) {
    case FETCH_CATEGORIES:
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
    case FETCH_POST:
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
    case FETCH_COMMENTS:
      return action.comments.sort(sortBy('timestamp'));
    case CREATE_COMMENT:
      const newState = state.concat([action.comment]);
      return newState.sort(sortBy('timestamp'));
    case UPDATE_COMMENT:
    case VOTE_COMMENT:
      return state.map((comment) => {
        return comment.id === action.comment.id ? action.comment : comment;
      }).sort(sortBy('timestamp'));
    case DELETE_COMMENT:
      return state.filter(comment => {
        return comment.id !== action.comment.id;
      });
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
