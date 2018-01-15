import { CREATE_POST, FETCH_POST, UPDATE_POST } from '../actions/post';

/**
 * single post reducer
 */
export default function post(state = {}, action) {
  switch (action.type) {
    case FETCH_POST:
    case CREATE_POST:
    case UPDATE_POST:
      return action.post;
    default:
      return state;
  }
}
