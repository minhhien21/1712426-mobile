import {
  GET_DETAIL_INSTRUCTOR_FAILED,
  GET_DETAIL_INSTRUCTOR_SUCCESSED,
  GET_LIST_INSTRUCTOR_FAILED,
  GET_LIST_INSTRUCTOR_SUCCESSED,
} from '../action/instructor-action';

export const reducer = (prevState, action) => {
  switch (action.type) {
    case GET_LIST_INSTRUCTOR_SUCCESSED:
      return {
        ...prevState,
        isRequestedListInstructor: true,
        ListInstructor: action.data,
      };
    case GET_LIST_INSTRUCTOR_FAILED:
      return {
        ...prevState,
        isRequestedListInstructor: false,
      };
    case GET_DETAIL_INSTRUCTOR_SUCCESSED:
      return {
        ...prevState,
        isRequestedSearch: true,
        DetailInstructor: action.data,
      };
    case GET_DETAIL_INSTRUCTOR_FAILED:
      return {
        ...prevState,
        isRequestedSearch: false,
      };
    default:
      throw new Error();
  }
};
