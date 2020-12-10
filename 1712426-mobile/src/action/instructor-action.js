import {apiLogin} from '../core/service/authentication-service';
import {
  apiGetDetailInstructor,
  apiGetListInstructor,
} from '../core/service/instructor-service';
export const GET_LIST_INSTRUCTOR_SUCCESSED = 'GET_LIST_INSTRUCTOR_SUCCESSED';
export const GET_LIST_INSTRUCTOR_FAILED = 'GET_LIST_INSTRUCTOR_FAILED';
export const GET_DETAIL_INSTRUCTOR_SUCCESSED =
  'GET_DETAIL_INSTRUCTOR_SUCCESSED';
export const GET_DETAIL_INSTRUCTOR_FAILED = 'GET_DETAIL_INSTRUCTOR_FAILED';
const getListInstructorSuccessed = (data) => ({
  type: GET_LIST_INSTRUCTOR_SUCCESSED,
  data,
});
const getListInstructorFailed = (data) => ({
  type: GET_LIST_INSTRUCTOR_FAILED,
  data,
});
const getDetailInstructorSuccessed = (data) => ({
  type: GET_DETAIL_INSTRUCTOR_SUCCESSED,
  data,
});
const getDetailInstructorFailed = (data) => ({
  type: GET_DETAIL_INSTRUCTOR_FAILED,
  data,
});
export const requestListInstructor = (dispatch) => () => {
  const res = apiGetListInstructor();
  res
    .then((response) => {
      if (response.status === 200) {
        dispatch(getListInstructorSuccessed(response.data));
      } else {
        dispatch(getListInstructorFailed(response.data));
      }
    })
    .catch((error) => {
      dispatch(getListInstructorFailed(error.response.data));
    });
};
export const requestDetailInstructor = (dispatch) => (id) => {
  const res = apiGetDetailInstructor(id);
  res
    .then((response) => {
      if (response.status === 200) {
        dispatch(getDetailInstructorSuccessed(response.data));
      } else {
        dispatch(getDetailInstructorFailed(response.data));
      }
    })
    .catch((error) => {
      dispatch(getDetailInstructorFailed(error.response.data));
    });
};
