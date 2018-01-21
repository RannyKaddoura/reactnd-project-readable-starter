const api = 'http://localhost:3001';

const headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
  Authorization: process.env.READABLE_API_TOKEN
};

/**
 * get all categories
 * @returns {Promise<*[]>}
 */
export const fetchAllCategories = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())
    .then(res => res.categories);

/**
 * get all posts
 * @returns {Promise<*[]>}
 */
export const fetchAllPosts = () =>
  fetch(`${api}/posts`, { headers }).then(res => res.json());

/**
 * fetch posts of a certain category
 *
 * @param category
 * @returns {Promise<any>}
 */
export const fetchPostsByCategory = category =>
  fetch(`${api}/${category}/posts`, { headers }).then(res => res.json());

/**
 * fetch post details
 *
 * @param id
 * @returns {Promise<any>}
 */
export const fetchPost = id =>
  fetch(`${api}/posts/${id}`, { headers }).then(res => res.json());

/**
 * @param post
 * @returns {Promise<any>}
 */
export const postPost = post =>
  fetch(`${api}/posts`, {
    headers,
    method: 'post',
    body: JSON.stringify(post)
  }).then(response => response.json());

/**
 * update/put post
 *
 * @param post
 * @returns {Promise<any>}
 */
export const putPost = post =>
  fetch(`${api}/posts/${post.id}`, {
    headers,
    method: 'put',
    body: JSON.stringify({ title: post.title, body: post.body })
  }).then(response => response.json());

/**
 *
 * @param post
 * @param option
 * @returns {Promise<Response>}
 */
export const votePost = (post, option) => {
  return fetch(`${api}/posts/${post.id}`, {
    headers,
    method: 'post',
    body: JSON.stringify(option)
  }).then(response => response.json());
};

/**
 *
 * @param post
 * @returns {Promise<Response>}
 */
export const deletePost = post => {
  return fetch(`${api}/posts/${post.id}`, {
    headers,
    method: 'delete'
  }).then(response => response.json());
};

/**
 * fetch comments
 *
 * @param postId
 * @returns {Promise<any>}
 */
export const fetchComments = postId =>
  fetch(`${api}/posts/${postId}/comments`, { headers }).then(res => res.json());

/**
 * post a comment
 *
 * @param comment
 * @returns {Promise<any>}
 */
export const postComment = comment =>
  fetch(`${api}/comments`, {
    headers,
    method: 'post',
    body: JSON.stringify(comment)
  }).then(response => response.json());

/**
 * update/put a comment
 *
 * @param comment
 * @returns {Promise<any>}
 */
export const putComment = comment =>
  fetch(`${api}/comments/${comment.id}`, {
    headers,
    method: 'put',
    body: JSON.stringify(comment)
  }).then(response => response.json());

/**
 *
 * @param comment
 * @param option
 * @returns {Promise<Response>}
 */
export const voteComment = (comment, option) => {
  return fetch(`${api}/comments/${comment.id}`, {
    headers,
    method: 'post',
    body: JSON.stringify(option)
  }).then(response => response.json());
};

/**
 *
 * @param comment
 * @returns {Promise<Response>}
 */
export const deleteComment = comment => {
  return fetch(`${api}/comments/${comment.id}`, {
    headers,
    method: 'delete'
  }).then(response => response.json());
};
