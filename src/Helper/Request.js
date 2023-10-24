import axios from 'axios';
import {SERVER_URL} from '../Constants/Api';
import {getToken} from './Helper';

export const getRequest = async api_url => {
  const token = await getToken();
  let header = {headers: {Authorization: token}};
  console.log('Headers', header);
  return axios
    .get(SERVER_URL + api_url, header)
    .then(res => {
      console.log('res', res);
      return res;
    })
    .then(res => res.data);
};

export const postRequest = (api_url, params) => {
  return axios
    .post(SERVER_URL + api_url, params)
    .then(res => {
      console.log('res', res);
      return res;
    })
    .then(res => res.data);
};
