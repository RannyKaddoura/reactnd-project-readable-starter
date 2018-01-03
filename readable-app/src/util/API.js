const api = "http://localhost:3001";


// Generate a unique token for storing your bookshelf data on the backend server.
let token = 'abcsrf3';

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}


export const getCategories = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())
    .then(res => res.categories);


