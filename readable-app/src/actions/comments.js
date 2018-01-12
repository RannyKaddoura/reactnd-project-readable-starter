import * as API from '../util/API';
import * as uuid from 'uuid/v4';
import moment from 'moment';

export const GET_COMMENTS = 'GET_COMMENTS';
export const ADD_COMMENT = 'ADD_COMMENT';
export const UPDATE_COMMENT = 'UPDATE_COMMENT';

export function fetchComments(postId) {
  return dispatch =>
    API.fetchComments(postId).then(comments => dispatch(getComments(comments)));
}

export function createComment({ body, author, parentId }) {
  const comment = {
    id: uuid(),
    timestamp: moment().unix(),
    voteScore: 0,
    body,
    author,
    parentId
  };

  return dispatch =>
    API.postComment(comment).then(result => dispatch(addComment(result)));
}

export function updateComment(comment) {
  return dispatch =>
    API.putComment(comment).then(() => dispatch(doUpdateComment(comment)));
}

export function voteComment(comment, option) {
  return dispatch =>
    API.voteComment(comment, option).then((result) =>
      {
        dispatch(doUpdateComment(result))
      }
    );
}

function getComments(comments) {
  return {
    type: GET_COMMENTS,
    comments: comments
  };
}

function addComment(comment) {
  return {
    type: ADD_COMMENT,
    comment: comment
  };
}

function doUpdateComment(comment) {
  return {
    type: UPDATE_COMMENT,
    comment
  };
}
