import * as API from '../util/API';
import * as uuid from 'uuid/v4';
import moment from 'moment/moment';

export const FETCH_POST = 'FETCH_POST';
export const CREATE_POST = 'CREATE_POST';
export const UPDATE_POST = 'UPDATE_POST';
export const VOTE_POST = 'VOTE_POST';
export const DELETE_POST = 'DELETE_POST';

/**
 * fetch comments on api
 */
export function doFetchPost(postId) {
  return dispatch =>
    API.fetchPost(postId).then(post => dispatch(fetchPost(post)));
}

/**
 * update post
 */
export function doUpdatePost(post) {
  return dispatch =>
    API.putPost(post).then(post => {
      dispatch(updatePost(post));
      return post;
    });
}
/**
 * delete post
 */
export function doDeletePost(post) {
  return dispatch => API.deletePost(post).then(() => dispatch(deletePost()));
}

/**
 * create new comment on api
 */
export function doCreatePost({ body, author, title, category }) {
  const post = {
    id: uuid(),
    timestamp: moment().unix(),
    title,
    body,
    author,
    category
  };

  return dispatch =>
    API.postPost(post).then(post => {
      dispatch(createPost(post));
      return post;
    });
}

/**
 * up or downvote on api
 */
export function doVotePost(post, option) {
  return dispatch =>
    API.votePost(post, option).then(post => dispatch(votePost(post)));
}

function fetchPost(post) {
  return {
    type: FETCH_POST,
    post: post
  };
}

function updatePost(post) {
  return {
    type: UPDATE_POST,
    post
  };
}

function createPost(post) {
  return {
    type: CREATE_POST,
    post
  };
}

function votePost(post) {
  return {
    type: VOTE_POST,
    post
  };
}

function deletePost() {
  return {
    type: DELETE_POST
  };
}
