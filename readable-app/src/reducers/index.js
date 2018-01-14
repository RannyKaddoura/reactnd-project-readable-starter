import { combineReducers } from 'redux';
import comments from './comments';
import categories from './categories';
import posts from './posts';
import post from './post';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  categories,
  posts,
  post,
  comments,
  form: formReducer
});
