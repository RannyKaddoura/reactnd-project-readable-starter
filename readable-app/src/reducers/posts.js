import { GET_POSTS, SORT_POSTS } from '../actions/posts'
import sortBy from 'sort-by';

/**
 * Posts Reducer
 */
export default function posts(state = [], action) {
  switch (action.type) {
    case GET_POSTS:
      return action.posts;
    case SORT_POSTS:
      console.log(action);
      return action.posts.sort(sortBy(action.sortBy))
    default:
      return state;
  }
}