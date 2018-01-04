import * as API from '../util/API';

export const GET_CATEGORIES = 'GET_CATEGORIES';

export function fetchCategories() {
  return dispatch =>
    API.fetchAllCategories()
      .then(categories => dispatch(getCategories(categories)));
}

function getCategories(categories) {
  return {
    type: GET_CATEGORIES,
    categories
  };
}
