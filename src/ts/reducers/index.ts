import { GET_PROJECTS, SET_ACTIVE_PROJECT } from '../types/action-types';
import { Action } from '../types/types';

const initialStateGetProjects = {
  payload: {}
}

const initialStateActiveProject = {
  payload: 0
}

export default function rootReducer(
  state = {initialStateGetProjects, initialStateActiveProject},
  action: Action
) {
  if (action.type === GET_PROJECTS) {
    return Object.assign({}, state, {
      payload: action.payload
    });
  } else if (action.type === SET_ACTIVE_PROJECT) {
    return Object.assign({}, state, {
      id: action.payload
    });
  } 

  return state;
}
