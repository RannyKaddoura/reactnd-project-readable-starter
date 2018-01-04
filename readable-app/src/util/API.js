const api = "http://localhost:3001";


// Generate a unique token for storing your bookshelf data on the backend server.
let token = 'abcsrf3';

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}
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
  fetch(`${api}/posts`, { headers })
    .then(res => res.json());
