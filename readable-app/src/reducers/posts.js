import { GET_POSTS } from '../actions/posts'

/**
 * Posts Reducer
 */
export default function posts(state = [], action) {
  switch (action.type) {
    case GET_POSTS:
      return action.posts;
    default:
      return state;
  }
}