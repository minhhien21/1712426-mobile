import axios from 'axios';
import {URLAPI} from '../../globals/urlApi';
export const apiLessonDetail = (token, idCourse, idLesson) => {
    return axios.get(
      URLAPI + '/lesson/video/' + idCourse + '/' + idLesson,
      {
        headers: {Authorization: `Bearer ${token}`},
      },
    )
  };