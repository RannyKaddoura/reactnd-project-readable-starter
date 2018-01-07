import * as API from '../util/API';

export const GET_COMMENTS = 'GET_COMMENTS';

export function fetchComments(postId) {
  return dispatch =>
    API.fetchComments(postId)
      .then(comments => dispatch(getComments(comments)));
}


function getComments(comments) {
  return {
    type: GET_COMMENTS,
    comments: comments
  };
}
