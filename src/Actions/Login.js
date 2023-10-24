import {postRequest} from '../Helper/Request';

export const Login = params => {
  const api_url = 'guides/login';
  return postRequest(api_url, params);
};
