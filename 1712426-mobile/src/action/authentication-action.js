import {apiLogin, apiLoginGoogle} from '../core/service/authentication-service';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESSED = 'LOGIN_SUCCESSED';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const SIGNOUT_SUCCESSED = 'SIGNOUT_SUCCESSED';
const loginSuccess = (data) => ({
  type: LOGIN_SUCCESSED,
  data,
});
const loginFailed = (data) => ({
  type: LOGIN_FAILED,
  data,
});
const signoutSuccess = () => ({
  type: SIGNOUT_SUCCESSED
});
export const login = (dispatch) => (username, password) => {
    const res = apiLogin(username, password);
    res.then((response) => {
      if (response.status === 200) {
        dispatch(loginSuccess(response.data));
      } else {
        dispatch(loginFailed(response.data));
      }
    })
    .catch((error) => {
      dispatch(loginFailed(error.response.data));
    });
};
export const loginGoogle = (dispatch) => (email, id) => {
  const res = apiLoginGoogle(email, id);
  res.then((response) => {
    if (response.status === 200) {
      dispatch(loginSuccess(response.data));
    } else {
      dispatch(loginFailed(response.data));
    }
  })
  .catch((error) => {
    dispatch(loginFailed(error.response.data));
  });
};
export const signout = (dispatch) => () => {
  dispatch(signoutSuccess());
};


