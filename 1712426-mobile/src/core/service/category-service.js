import axios from 'axios';
import {URLAPI} from '../../globals/urlApi';
export const apiGetAllCategory = () => {
  return axios.get(URLAPI + '/category/all');
};
export const apiGetListCourseWithCategoryId = (idCategory) => {
  return axios.post(URLAPI + '/course/search',
  {
    keyword: "",
    opt: {
      sort: {
        attribute: "price",
        rule: "ASC"
      },
      category: [
        idCategory
      ]
    },
    limit: 10,
    offset: 1
  });
};