import * as API from '../util/API';
import {FETCH_CATEGORIES} from './types';

/**
 * fetch categories on api
 */
export function doFetchCategories() {
  return dispatch =>
    API.fetchAllCategories().then(categories =>
      dispatch(fetchCategories(categories))
    );
}

function fetchCategories(categories) {
  return {
    type: FETCH_CATEGORIES,
    categories
  };
}
