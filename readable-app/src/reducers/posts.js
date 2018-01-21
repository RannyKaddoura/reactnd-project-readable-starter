import { GET_POSTS, SORT_POSTS, VOTE_POST } from '../actions/types'
import sortBy from 'sort-by';

/**
 * Posts Reducer
 */
export default function posts(state = [], action) {
  switch (action.type) {
    case GET_POSTS:
      return action.posts;
    case VOTE_POST:
      return state.map(post => post.id === action.post.id ? action.post : post);
    case SORT_POSTS:
      return action.posts.concat().sort(sortBy(`${action.sortBy}`));
    default:
      return state;
  }
}
