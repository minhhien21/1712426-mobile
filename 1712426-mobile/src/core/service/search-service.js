import axios from 'axios';
import {URLAPI} from '../../globals/urlApi';
export const apiSearchV2 = (keyword) => {
  return axios.post(URLAPI + '/course/searchV2', {
    keyword: keyword,
  });
};
export const apiGetSearchHistory = (token) => {
  return axios.post(
    URLAPI + '/course/search-history',
    {
      headers: {Authorization: `Bearer ${token}`},
    },
  );
};