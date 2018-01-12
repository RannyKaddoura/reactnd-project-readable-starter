import * as API from '../util/API';

export const FETCH_POST = 'FETCH_POST';

/**
 * fetch comments on api
 */
export function doFetchPost(postId) {
  return dispatch =>
    API.fetchPost(postId).then(post => dispatch(fetchPost(post)));
}

function fetchPost(post) {
  return {
    type: FETCH_POST,
    post: post
  };
}
