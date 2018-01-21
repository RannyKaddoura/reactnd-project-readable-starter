import * as API from '../util/API';
import * as uuid from 'uuid/v4';
import moment from 'moment';
import {
  FETCH_COMMENTS,
  UPDATE_COMMENT,
  CREATE_COMMENT,
  VOTE_COMMENT,
  DELETE_COMMENT
} from './types';

/**
 * fetch comments on api
 */
export function doFetchComments(postId) {
  return dispatch =>
    API.fetchComments(postId).then(comments => dispatch(getComments(comments)));
}

/**
 * create new comment on api
 */
export function doCreateComment({ body, author, parentId }) {
  const comment = {
    id: uuid(),
    timestamp: moment().unix(),
    body,
    author,
    parentId
  };

  return dispatch =>
    API.postComment(comment).then(result => dispatch(addComment(result)));
}

/**
 * update comment
 */
export function doUpdateComment(comment) {
  return dispatch =>
    API.putComment(comment).then(() => dispatch(updateComment(comment)));
}

/**
 * up or downvote on api
 */
export function doVoteComment(comment, option) {
  return dispatch =>
    API.voteComment(comment, option).then(comment =>
      dispatch(voteComment(comment))
    );
}

/**
 * delete comment on api
 */
export function doDeleteComment(comment) {
  return dispatch =>
    API.deleteComment(comment).then(() => dispatch(deleteComment(comment)));
}

function getComments(comments) {
  return {
    type: FETCH_COMMENTS,
    comments: comments
  };
}

function addComment(comment) {
  return {
    type: CREATE_COMMENT,
    comment: comment
  };
}

function updateComment(comment) {
  return {
    type: UPDATE_COMMENT,
    comment
  };
}

function voteComment(comment) {
  return {
    type: VOTE_COMMENT,
    comment
  };
}

function deleteComment(comment) {
  return {
    type: DELETE_COMMENT,
    comment
  };
}
