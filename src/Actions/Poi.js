import {postRequest, getRequest} from '../Helper/Request';

export const getPois = () => {
  const api_url = 'pois/lookup';
  return getRequest(api_url);
};
