import * as API from '../util/API';

export const GET_POSTS = 'GET_POSTS';

/**
 * fetch comments on api
 */
export function fetchPosts() {
  return dispatch =>
    API.fetchAllPosts().then(posts => dispatch(getPosts(posts)));
}

/**
 * fetch posts by category on api
 */
export function fetchPostsByCategory(category) {
  return dispatch =>
    API.fetchPostsByCategory(category).then(posts => dispatch(getPosts(posts)));
}

function getPosts(posts) {
  return {
    type: GET_POSTS,
    posts: posts
  };
}
