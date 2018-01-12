import * as API from '../util/API';

export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';

/**
 * fetch categories on api
 */
export function doFetchCategories() {
  return dispatch =>
    API.fetchAllCategories().then(categories =>
      dispatch(fetchCategorie(categories))
    );
}

function fetchCategorie(categories) {
  return {
    type: FETCH_CATEGORIES,
    categories
  };
}
