import {
  CLEAR_POST,
  CREATE_POST,
  FETCH_POST,
  UPDATE_POST,
  VOTE_POST
} from '../actions/types'

/**
 * single post reducer
 */
export default function post(state = {}, action) {
  switch (action.type) {
    case FETCH_POST:
    case CREATE_POST:
    case UPDATE_POST:
    case VOTE_POST:
    case CLEAR_POST:
      return action.post;
    default:
      return state;
  }
}
