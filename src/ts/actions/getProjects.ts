import { GET_PROJECTS } from '../store/constants';

export default function getProjects(payload: Object) {
  return { 
    type: GET_PROJECTS,
    payload
  };
}