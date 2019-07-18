import { GET_PROJECTS } from '../types/action-types';
import { GetProjectsAction } from '../types/types';

const initialState = {
  payload: {}
}

function rootReducer(state = initialState, action: GetProjectsAction) {
  if (action.type === GET_PROJECTS) {
    return Object.assign({}, state, {
      payload: action.payload
    });
  }

  return state;
}

export default rootReducer;
