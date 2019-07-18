import { GET_PROJECTS } from '../types/action-types';

export default function getProjects(payload: Object) {
  return { 
    type: GET_PROJECTS,
    payload
  };
}