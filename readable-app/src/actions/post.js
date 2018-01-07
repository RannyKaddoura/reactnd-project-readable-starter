import * as API from '../util/API';

export const GET_POST = 'GET_POST';

export function fetchPost(postId) {
  return dispatch =>
    API.fetchPost(postId)
      .then(post => dispatch(getPost(post)));
}


function getPost(post) {
  return {
    type: GET_POST,
    post: post
  };
}
