import axios from 'axios';
import {URLAPI} from '../../globals/urlApi';
export const apiGetFreeCourses = (token, courseId) => {
  return axios.post(
    URLAPI + '/payment/get-free-courses',
    {
      courseId: courseId,
    },
    {
      headers: {Authorization: `Bearer ${token}`},
    },
  );
};
