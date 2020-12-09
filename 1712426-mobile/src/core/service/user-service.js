import axios from 'axios';
import {URLAPI} from '../../globals/urlApi';
export const apiUpdateProfile = (token, name, avatar, phone) => {
  return axios.put(
    URLAPI + '/user/update-profile',
    {
      name: name,
      avatar: avatar,
      phone: phone,
    },
    {
      headers: {Authorization: `Bearer ${token}`},
    },
  );
};
export const apiChangePassword = (token, id, oldPass, newPass) => {
  return axios.post(
    URLAPI + '/user/change-password',
    {
      id: id,
      oldPass: oldPass,
      newPass: newPass,
    },
    {
      headers: {Authorization: `Bearer ${token}`},
    },
  );
};
