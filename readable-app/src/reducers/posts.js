import { GET_POSTS, SORT_POSTS } from '../actions/types';
import sortBy from 'sort-by';

/**
 * Posts Reducer
 */
export default function posts(state = [], action) {
  switch (action.type) {
    case GET_POSTS:
      return action.posts;
    case SORT_POSTS:
      return action.posts.concat().sort(sortBy(`${action.sortBy}`));
    default:
      return state;
  }
}
