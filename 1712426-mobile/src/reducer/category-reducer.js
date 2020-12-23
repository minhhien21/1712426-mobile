import {
  REQUEST_GET_ALL_CATEGORY_FAILED,
  REQUEST_GET_ALL_CATEGORY_SUCCESSED,
  REQUEST_GET_LIST_COURSE_CATEGORY_FAILED,
  REQUEST_GET_LIST_COURSE_CATEGORY_SUCCESSED,
} from '../action/category-action';

export const reducer = (prevState, action) => {
  switch (action.type) {
    case REQUEST_GET_ALL_CATEGORY_SUCCESSED:
      return {
        ...prevState,
        isRequestedGetAllCategory: true,
        ListCategory: action.data,
      };
    case REQUEST_GET_ALL_CATEGORY_FAILED:
      return {...prevState, isRequestedGetAllCategory: false};
    case REQUEST_GET_LIST_COURSE_CATEGORY_SUCCESSED:
      return {
        ...prevState,
        isRequestedGetListCourseCategory: true,
        ListCourseCategory: action.data,
      };
    case REQUEST_GET_LIST_COURSE_CATEGORY_FAILED:
      return {...prevState, isRequestedGetListCourseCategory: false};
    default:
      throw new Error();
  }
};
