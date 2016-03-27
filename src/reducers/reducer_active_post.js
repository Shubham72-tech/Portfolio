import {INITIAL_STATE} from './index';

import {FETCH_POST} from 'actions/index';

export default function(state = INITIAL_STATE.active_post, action) {
  switch(action.type) {
    case FETCH_POST:
      console.log(action.payload.data);
      return action.payload.data.items[0].fields;
    default:
      return state;
  }
}
