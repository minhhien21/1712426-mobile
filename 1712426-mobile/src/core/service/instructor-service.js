import axios from 'axios';
import {URLAPI} from '../../globals/urlApi';
export const apiGetListInstructor = () => {
  return axios.get(
    URLAPI + '/instructor',
  );
};
export const apiGetDetailInstructor = (id) => {
  
  return axios.get(
    URLAPI + '/instructor/detail/' + id,
  );
};
