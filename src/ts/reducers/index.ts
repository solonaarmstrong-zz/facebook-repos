import { GET_PROJECTS, SET_ACTIVE_PROJECT, GET_CONTRIBUTORS } from '../store/constants';
import { Action } from '../types/types';

const initialStateGetProjects = {
  payload: {}
}

const initialStateActiveProject = {
  id: 0
}

const initialStateContributors = {
  data: {}
}

export default function rootReducer(
  state = {
    initialStateGetProjects,
    initialStateActiveProject,
    initialStateContributors
  },
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
  } else if (action.type === GET_CONTRIBUTORS) {
    return Object.assign({}, state, {
      contributors: action.payload
    });
  }

  return state;
}
