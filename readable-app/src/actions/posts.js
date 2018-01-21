import * as API from '../util/API';
import { GET_POSTS, SORT_POSTS } from './types'

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

/**
 * sort posts
 */
export function doSortPosts(posts, sortBy) {
  return dispatch => dispatch(sortPosts(posts, sortBy));
}

function getPosts(posts) {
  return {
    type: GET_POSTS,
    posts
  };
}

function sortPosts(posts, sortBy) {
  return {
    type: SORT_POSTS,
    posts,
    sortBy
  };
}
