import axios from 'axios';
import {URLAPI} from '../../globals/urlApi';
export const apiGetListExerciseByLesson = (token, lessonId) => {
    return axios.post(
      URLAPI + '/exercise/student/list-exercise-lesson',
      {
        lessonId: lessonId,
      },
      {
        headers: {Authorization: `Bearer ${token}`},
      },
    )
  };