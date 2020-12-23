import {apiGetAllCategory, apiGetListCourseWithCategoryId} from '../core/service/category-service';

export const REQUEST_GET_ALL_CATEGORY_SUCCESSED =
  'REQUEST_GET_ALL_CATEGORY_SUCCESSED';
export const REQUEST_GET_ALL_CATEGORY_FAILED =
  'REQUEST_GET_ALL_CATEGORY_FAILED';
export const REQUEST_GET_LIST_COURSE_CATEGORY_SUCCESSED =
  'REQUEST_GET_LIST_COURSE_CATEGORY_SUCCESSED';
export const REQUEST_GET_LIST_COURSE_CATEGORY_FAILED =
  'REQUEST_GET_LIST_COURSE_CATEGORY_FAILED';
// get all category
const requestGetAllCategorySuccess = (data) => ({
  type: REQUEST_GET_ALL_CATEGORY_SUCCESSED,
  data,
});
const requestGetAllCategoryFailed = (data) => ({
  type: REQUEST_GET_ALL_CATEGORY_FAILED,
  data,
});
// get list course with category id
const requestGetListCourseCategorySuccess = (data) => ({
  type: REQUEST_GET_LIST_COURSE_CATEGORY_SUCCESSED,
  data,
});
const requestGetListCourseCategoryFailed = (data) => ({
  type: REQUEST_GET_LIST_COURSE_CATEGORY_FAILED,
  data,
});

// top sell course
export const requestGetAllCategory = (dispatch) => () => {
  const res = apiGetAllCategory();
  res
    .then((response) => {
      if (response.status === 200) {
        dispatch(requestGetAllCategorySuccess(response.data));
      } else {
        dispatch(requestGetAllCategoryFailed(response.data));
      }
    })
    .catch((error) => {
      dispatch(requestGetAllCategoryFailed(error.response.data));
    });
};
// get list course with category id
export const requestGetListCourseCategory = (dispatch) => (idCategory) => {
  const res = apiGetListCourseWithCategoryId(idCategory);
  res
    .then((response) => {
      if (response.status === 200) {
        dispatch(requestGetListCourseCategorySuccess(response.data));
      } else {
        dispatch(requestGetListCourseCategoryFailed(response.data));
      }
    })
    .catch((error) => {
      dispatch(requestGetListCourseCategoryFailed(error.response.data));
    });
};
