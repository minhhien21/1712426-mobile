import axios from 'axios';
import {URLAPI} from '../../globals/urlApi';
export const apiCourseTopSell = (limit, page) => {
  return axios.post(URLAPI + '/course/top-sell', {
    limit: limit,
    page: page,
  });
};
export const apiCourseTopNew = (limit, page) => {
  return axios.post(URLAPI + '/course/top-new', {
    limit: limit,
    page: page,
  });
};
export const apiCourseTopRate = (limit, page) => {
  return axios.post(URLAPI + '/course/top-rate', {
    limit: limit,
    page: page,
  });
};
export const apiCourseFavirote = (userId) => {
  return axios.post(URLAPI + '/course/courses-user-favorite-categories', {
    userId: userId,
  });
};
export const apiCourseDetail = (id, userId) => {
  return axios.get(
    URLAPI + '/course/get-course-detail/' + id + '/' + userId + '',
  );
};
export const apiRatingCourse = (token,courseId,formalityPoint,contentPoint,presentationPoint,content) => {
  return axios.post(
    URLAPI + '/course/rating-course',
    {
      courseId: courseId,
      formalityPoint: formalityPoint,
      contentPoint: contentPoint,
      presentationPoint: presentationPoint,
      content: content,
    },
    {
      headers: {Authorization: `Bearer ${token}`},
    },
  );
};
