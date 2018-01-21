import {
  CREATE_COMMENT,
  DELETE_COMMENT,
  FETCH_COMMENTS,
  UPDATE_COMMENT,
  VOTE_COMMENT
} from '../actions/types';
import sortBy from 'sort-by';

/**
 * comments reducer
 */
export default function comments(state = [], action) {
  switch (action.type) {
    case FETCH_COMMENTS:
      return action.comments.sort(sortBy('timestamp'));
    case CREATE_COMMENT:
      const newState = state.concat([action.comment]);
      return newState.sort(sortBy('timestamp'));
    case UPDATE_COMMENT:
    case VOTE_COMMENT:
      return state
        .map(comment => {
          return comment.id === action.comment.id ? action.comment : comment;
        })
        .sort(sortBy('timestamp'));
    case DELETE_COMMENT:
      return state.filter(comment => {
        return comment.id !== action.comment.id;
      });
    default:
      return state;
  }
}
