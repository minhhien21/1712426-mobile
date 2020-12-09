import {apiLogin} from '../core/service/authentication-service';
import { apiCourseFavirote, apiCourseTopNew, apiCourseTopRate, apiCourseTopSell } from '../core/service/course-service';
export const REQUEST_TOP_SELL_LIST_COURSE_SUCCESSED = 'REQUEST_TOP_SELL_LIST_COURSE_SUCCESSED';
export const REQUEST_TOP_SELL_LIST_COURSE_FAILED = 'REQUEST_TOP_SELL_LIST_COURSE_FAILED';
export const REQUEST_TOP_NEW_LIST_COURSE_SUCCESSED = 'REQUEST_TOP_NEW_LIST_COURSE_SUCCESSED';
export const REQUEST_TOP_NEW_LIST_COURSE_FAILED = 'REQUEST_TOP_NEW_LIST_COURSE_FAILED';
export const REQUEST_TOP_RATE_LIST_COURSE_SUCCESSED = 'REQUEST_TOP_RATE_LIST_COURSE_SUCCESSED';
export const REQUEST_TOP_RATE_LIST_COURSE_FAILED = 'REQUEST_TOP_RATE_LIST_COURSE_FAILED';
export const REQUEST_FAVORITE_LIST_COURSE_SUCCESSED = 'REQUEST_FAVORITE_LIST_COURSE_SUCCESSED';
export const REQUEST_FAVORITE_LIST_COURSE_FAILED = 'REQUEST_FAVORITE_LIST_COURSE_FAILED';

const requestTopSellListCourseSuccess = (data) => ({
  type: REQUEST_TOP_SELL_LIST_COURSE_SUCCESSED,
  data,
});
const requestTopSellListCourseFailed = (data) => ({
  type: REQUEST_TOP_SELL_LIST_COURSE_FAILED,
  data,
});

const requestTopNewListCourseSuccess = (data) => ({
    type: REQUEST_TOP_NEW_LIST_COURSE_SUCCESSED,
    data,
  });
const requestTopNewListCourseFailed = (data) => ({
    type: REQUEST_TOP_NEW_LIST_COURSE_FAILED,
    data,
  });

const requestTopRateListCourseSuccess = (data) => ({
    type: REQUEST_TOP_RATE_LIST_COURSE_SUCCESSED,
    data,
  });
const requestTopRateListCourseFailed = (data) => ({
    type: REQUEST_TOP_RATE_LIST_COURSE_FAILED,
    data,
  });

const requestFavoriteListCourseSuccess = (data) => ({
    type: REQUEST_FAVORITE_LIST_COURSE_SUCCESSED,
    data,
  });
const requestFavoriteListCourseFailed = (data) => ({
    type: REQUEST_FAVORITE_LIST_COURSE_FAILED,
    data,
  });

export const requestTopSellListCourse = (dispatch) => (limit, page) => {
    const res = apiCourseTopSell(limit, page);
    res.then((response) => {
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

export const requestTopNewListCourse = (dispatch) => (limit, page) => {
    const res = apiCourseTopNew(limit, page);
    res.then((response) => {
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

export const requestTopRateListCourse = (dispatch) => (limit, page) => {
    const res = apiCourseTopRate(limit, page);
    res.then((response) => {
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

export const requestFavoriteListCourse = (dispatch) => (userId) => {
    const res = apiCourseFavirote(userId);
    res.then((response) => {
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

