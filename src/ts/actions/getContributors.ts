import { GET_CONTRIBUTORS } from '../store/constants';

export default function getContributors(payload: Object) {
  return { 
    type: GET_CONTRIBUTORS,
    payload
  };
}