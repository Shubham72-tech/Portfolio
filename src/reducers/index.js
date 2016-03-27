import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import ContactReducer from './reducer_contact';
import PostsReducer from './reducer_posts';
import ActivePostReducer from './reducer_active_post';

export const INITIAL_STATE = {
  contact: {

  },
  posts: [

  ],
  active_post: {

  }
}

const rootReducer = combineReducers ({
  contact: ContactReducer,
  posts: PostsReducer,
  active_post: ActivePostReducer,
  form: formReducer,
});

export default rootReducer;
