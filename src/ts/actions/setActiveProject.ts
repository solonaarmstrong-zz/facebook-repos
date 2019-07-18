import { SET_ACTIVE_PROJECT } from '../store/constants';

export default function setActiveProject(payload: Object) {
  return { 
    type: SET_ACTIVE_PROJECT,
    payload
  };
}