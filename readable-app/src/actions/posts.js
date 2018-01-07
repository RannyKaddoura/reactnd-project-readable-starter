import * as API from '../util/API';

export const GET_POSTS = 'GET_POSTS';

export function fetchPosts() {
  return dispatch =>
    API.fetchAllPosts()
      .then(posts => dispatch(getPosts(posts)));
}

export function fetchPostsByCategory(category){
  return dispatch =>
    API.fetchPostsByCategory(category)
      .then(posts => dispatch(getPosts(posts)));
}

function getPosts(posts) {
  return {
    type: GET_POSTS,
    posts: posts
  };
}
