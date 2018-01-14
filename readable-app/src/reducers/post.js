import { FETCH_POST } from '../actions/post'

/**
 * single post reducer
 */
export default function post(state = {}, action) {
  switch (action.type) {
    case FETCH_POST:
      return action.post;
    default:
      return state;
  }
}