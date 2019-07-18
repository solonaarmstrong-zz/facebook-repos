import { GET_PROJECTS } from './action-types';

export interface ProjectDetails {
  payload: any[]
}

export interface GetProjectsAction {
  type: String
  payload: Object
}
