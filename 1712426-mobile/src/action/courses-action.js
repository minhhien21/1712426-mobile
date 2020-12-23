import {
  apiCourseDetail,
  apiCourseFavirote,
  apiCourseTopNew,
  apiCourseTopRate,
  apiCourseTopSell,
} from '../core/service/course-service';
import { apiGetUserFavoriteCourses, apiGetUserProcessCourses } from '../core/service/user-service';

export const REQUEST_TOP_SELL_LIST_COURSE_SUCCESSED ='REQUEST_TOP_SELL_LIST_COURSE_SUCCESSED';
export const REQUEST_TOP_SELL_LIST_COURSE_FAILED ='REQUEST_TOP_SELL_LIST_COURSE_FAILED';
export const REQUEST_TOP_NEW_LIST_COURSE_SUCCESSED ='REQUEST_TOP_NEW_LIST_COURSE_SUCCESSED';
export const REQUEST_TOP_NEW_LIST_COURSE_FAILED ='REQUEST_TOP_NEW_LIST_COURSE_FAILED';
export const REQUEST_TOP_RATE_LIST_COURSE_SUCCESSED ='REQUEST_TOP_RATE_LIST_COURSE_SUCCESSED';
export const REQUEST_TOP_RATE_LIST_COURSE_FAILED ='REQUEST_TOP_RATE_LIST_COURSE_FAILED';
export const REQUEST_FAVORITE_LIST_COURSE_SUCCESSED ='REQUEST_FAVORITE_LIST_COURSE_SUCCESSED';
export const REQUEST_FAVORITE_LIST_COURSE_FAILED ='REQUEST_FAVORITE_LIST_COURSE_FAILED';
export const REQUEST_DETAIL_COURSE_SUCCESSED ='REQUEST_DETAIL_COURSE_SUCCESSED';
export const REQUEST_DETAIL_COURSE_FAILED = 'REQUEST_DETAIL_COURSE_FAILED';
export const REQUEST_USER_FAVORITE_COURSE_SUCCESSED ='REQUEST_USER_FAVORITE_COURSE_SUCCESSED';
export const REQUEST_USER_FAVORITE_COURSE_FAILED ='REQUEST_USER_FAVORITE_COURSE_FAILED';
export const REQUEST_USER_PROCESS_COURSE_SUCCESSED ='REQUEST_USER_PROCESS_COURSE_SUCCESSED';
export const REQUEST_USER_PROCESS_COURSE_FAILED ='REQUEST_USER_PROCESS_COURSE_FAILED';
export const GET_CURRENT_URL_REQUEST = 'GET_CURRENT_URL_REQUEST';
// top sell course
const requestTopSellListCourseSuccess = (data) => ({
  type: REQUEST_TOP_SELL_LIST_COURSE_SUCCESSED,
  data,
});
const requestTopSellListCourseFailed = (data) => ({
  type: REQUEST_TOP_SELL_LIST_COURSE_FAILED,
  data,
});
// top new course
const requestTopNewListCourseSuccess = (data) => ({
  type: REQUEST_TOP_NEW_LIST_COURSE_SUCCESSED,
  data,
});
const requestTopNewListCourseFailed = (data) => ({
  type: REQUEST_TOP_NEW_LIST_COURSE_FAILED,
  data,
});
// top rate course
const requestTopRateListCourseSuccess = (data) => ({
  type: REQUEST_TOP_RATE_LIST_COURSE_SUCCESSED,
  data,
});
const requestTopRateListCourseFailed = (data) => ({
  type: REQUEST_TOP_RATE_LIST_COURSE_FAILED,
  data,
});
// top favorite course
const requestFavoriteListCourseSuccess = (data) => ({
  type: REQUEST_FAVORITE_LIST_COURSE_SUCCESSED,
  data,
});
const requestFavoriteListCourseFailed = (data) => ({
  type: REQUEST_FAVORITE_LIST_COURSE_FAILED,
  data,
});
// detail course
const requestDetailCourseSuccess = (data) => ({
  type: REQUEST_DETAIL_COURSE_SUCCESSED,
  data,
});
const requestDetailCourseFailed = (data) => ({
  type: REQUEST_DETAIL_COURSE_FAILED,
  data,
});
// user favorite course
const requestUserFavoriteCourseSuccess = (data) => ({
  type: REQUEST_USER_FAVORITE_COURSE_SUCCESSED,
  data,
});
const requestUserFavoriteCourseFailed = (data) => ({
  type: REQUEST_USER_FAVORITE_COURSE_FAILED,
  data,
});
// user process course
const requestUserProcessCourseSuccess = (data) => ({
  type: REQUEST_USER_PROCESS_COURSE_SUCCESSED,
  data,
});
const requestUserProcessCourseFailed = (data) => ({
  type: REQUEST_USER_PROCESS_COURSE_FAILED,
  data,
});
// user current URL Video
const requestGetCurrentURLVideo = (data) => ({
  type: GET_CURRENT_URL_REQUEST,
  data
});

// top sell course
export const requestTopSellListCourse = (dispatch) => (limit, page) => {
  const res = apiCourseTopSell(limit, page);
  res
    .then((response) => {
      if (response.status === 200) {
        dispatch(requestTopSellListCourseSuccess(response.data));
      } else {
        dispatch(requestTopSellListCourseFailed(response.data));
      }
    })
    .catch((error) => {
      dispatch(requestTopSellListCourseFailed(error.response.data));
    });
};
// top new course
export const requestTopNewListCourse = (dispatch) => (limit, page) => {
  const res = apiCourseTopNew(limit, page);
  res
    .then((response) => {
      if (response.status === 200) {
        dispatch(requestTopNewListCourseSuccess(response.data));
      } else {
        dispatch(requestTopNewListCourseFailed(response.data));
      }
    })
    .catch((error) => {
      dispatch(requestTopNewListCourseFailed(error.response.data));
    });
};
// top rate course
export const requestTopRateListCourse = (dispatch) => (limit, page) => {
  const res = apiCourseTopRate(limit, page);
  res
    .then((response) => {
      if (response.status === 200) {
        dispatch(requestTopRateListCourseSuccess(response.data));
      } else {
        dispatch(requestTopRateListCourseFailed(response.data));
      }
    })
    .catch((error) => {
      dispatch(requestTopRateListCourseFailed(error.response.data));
    });
};
// top favorite course
export const requestFavoriteListCourse = (dispatch) => (userId) => {
  const res = apiCourseFavirote(userId);
  res
    .then((response) => {
      if (response.status === 200) {
        dispatch(requestFavoriteListCourseSuccess(response.data));
      } else {
        dispatch(requestFavoriteListCourseFailed(response.data));
      }
    })
    .catch((error) => {
      dispatch(requestFavoriteListCourseFailed(error.response.data));
    });
};
// detail course
export const requestDetailCourse = (dispatch) => (id,userId) => {
  const res = apiCourseDetail(id,userId);
  res
    .then((response) => {
      if (response.status === 200) {
        dispatch(requestDetailCourseSuccess(response.data));
      } else {
        dispatch(requestDetailCourseFailed(response.data));
      }
    })
    .catch((error) => {
      dispatch(requestDetailCourseFailed(error.response.data));
    });
};
// user favorite course
export const requestUserFavoriteCourse = (dispatch) => (token) => {
  const res = apiGetUserFavoriteCourses(token);
  res
    .then((response) => {
      if (response.status === 200) {
        dispatch(requestUserFavoriteCourseSuccess(response.data));
      } else {
        dispatch(requestUserFavoriteCourseFailed(response.data));
      }
    })
    .catch((error) => {
      dispatch(requestUserFavoriteCourseFailed(error.response.data));
    });
};
// user process course
export const requestUserProcessCourse = (dispatch) => (token) => {
  const res = apiGetUserProcessCourses(token);
  res
    .then((response) => {
      if (response.status === 200) {
        dispatch(requestUserProcessCourseSuccess(response.data));
      } else {
        dispatch(requestUserProcessCourseFailed(response.data));
      }
    })
    .catch((error) => {
      dispatch(requestUserProcessCourseFailed(error.response.data));
    });
};
// get current URL video
export const GetCurrentURLVideo = (dispatch) => (URLVideo) => {
  dispatch(requestGetCurrentURLVideo(URLVideo));
}