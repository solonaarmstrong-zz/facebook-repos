import { GET_PROJECTS } from './action-types';

export interface ProjectDetails {
  name: string,
  description: string, 
  url: string,
  contributors_url: string,
  watchers: number
}

export interface ActiveProject {
  name: string
}

export interface GetProjectsAction {
  type: String
  payload: Object
}
