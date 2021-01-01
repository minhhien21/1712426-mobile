import axios from 'axios';
import {URLAPI} from '../../globals/urlApi';
export const apiLogin = (username, password) => {
  return axios.post(URLAPI + '/user/login', {
    email: username,
    password: password,
  });
};
export const apiLoginGoogle = (email, id) => {
  return axios.post(URLAPI + '/user/login-google-mobile', {
    user: {
      email: email,
      id: id,
    },
  });
};
export const apiRegister = (username, email, phone, password) => {
  return axios.post(URLAPI + '/user/register', {
    username: username,
    email: email,
    phone: phone,
    password: password,
  });
};
export const apiForgetPassword = (email) => {
  return axios.post(URLAPI + '/user/forget-pass/send-email', {
    email: email,
  });
};
