const api = 'http://localhost:3001';

// Generate a unique token for storing your bookshelf data on the backend server.
let token = 'fred';

const headers = {
  'Content-Type' : 'application/json',
  Accept: 'application/json',
  Authorization: token
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
 * fetch comments
 *
 * @param postId
 * @returns {Promise<any>}
 */
export const fetchComments = postId =>
  fetch(`${api}/posts/${postId}/comments`, { headers })
    .then(res => res.json());

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
