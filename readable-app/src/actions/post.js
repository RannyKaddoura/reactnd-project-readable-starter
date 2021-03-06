import * as API from '../util/API';
import * as uuid from 'uuid/v4';
import moment from 'moment/moment';
import {
  FETCH_POST,
  UPDATE_POST,
  DELETE_POST,
  VOTE_POST,
  CREATE_POST, CLEAR_POST
} from './types'

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

export function doClearPost(){
  return {
    type: CLEAR_POST,
    post: {}
  }
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
