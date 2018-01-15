import * as API from '../util/API';
import * as uuid from 'uuid/v4'
import moment from 'moment/moment'

export const FETCH_POST = 'FETCH_POST';
export const CREATE_POST = 'CREATE_POST';
export const UPDATE_POST = 'UPDATE_POST';

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
    API.putPost(post).then(post => dispatch(updatePost(post)));
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
    API.postPost(post).then(result => dispatch(createPost(result)));
}

function fetchPost(post) {
  return {
    type: FETCH_POST,
    post: post
  };
}

function updatePost(post){
  return {
    type: UPDATE_POST,
    post
  }
}

function createPost(post){
  return {
    type: CREATE_POST,
    post
  }
}
