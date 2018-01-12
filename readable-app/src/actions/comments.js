import * as API from '../util/API';
import * as uuid from 'uuid/v4';
import moment from 'moment';

export const FETCH_COMMENTS = 'FETCH_COMMENTS';
export const CREATE_COMMENT = 'CREATE_COMMENT';
export const UPDATE_COMMENT = 'UPDATE_COMMENT';
export const VOTE_COMMENT = 'VOTE_COMMENT';

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
    API.voteComment(comment, option).then((comment) =>
        dispatch(voteComment(comment))
    );
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
