import {INITIAL_STATE} from './index';

import {FETCH_POSTS} from 'actions/index';

export default function(state = INITIAL_STATE.posts, action) {
  switch(action.type) {
    case FETCH_POSTS:
      return action.payload.data.items;
    default:
      return state;
  }
}
