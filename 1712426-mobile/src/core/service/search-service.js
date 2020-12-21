import axios from 'axios';
import {URLAPI} from '../../globals/urlApi';
export const apiSearchV2 = (token, keyword) => {
  return axios.post(URLAPI + '/course/searchV2', {
    token: token,
    keyword: keyword,
  });
};
export const apiGetSearchHistory = (token) => {
  return axios.get(
    URLAPI + '/course/search-history',
    {
      headers: {Authorization: `Bearer ${token}`},
    },
  );
};
export const apiDeleteSearchHistory = (token, id) => {
  return axios.delete(
    URLAPI + '/course/delete-search-history/{' + id + '}',
    {
      headers: {Authorization: `Bearer ${token}`},
    },
  );
};