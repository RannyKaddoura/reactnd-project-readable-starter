import * as API from '../util/API';

export const GET_COMMENTS = 'GET_COMMENTS';
export const ADD_COMMENT = 'ADD_COMMENT';

export function fetchComments(postId) {
  return dispatch =>
    API.fetchComments(postId)
      .then(comments => dispatch(getComments(comments)));
}

export function doAddComment(comment){
  return dispatch =>
    API.postComment(comment)
      .then(result => dispatch(addComment(comment)))
}


function getComments(comments) {
  return {
    type: GET_COMMENTS,
    comments: comments
  };
}

function addComment(comment){
  return {
    type: ADD_COMMENT,
    comment: comment
  }
}
