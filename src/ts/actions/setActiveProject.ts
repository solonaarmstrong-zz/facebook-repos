import { SET_ACTIVE_PROJECT } from '../types/action-types';

export default function setActiveProject(payload: Object) {
  return { 
    type: SET_ACTIVE_PROJECT,
    payload
  };
}