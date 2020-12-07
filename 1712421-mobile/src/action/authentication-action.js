import axios from 'axios';
import { URLAPI } from '../globals/urlApi';
const LOGIN_SUCCESSED = "LOGIN_SUCCESSED";
const LOGIN_FAILED="LOGIN_FAILED";
export const login = (dispatch) => (username, password) =>{
    axios.post("http://api.dev.letstudy.org/user/login", {
        email: username,
        password: password
    }).then((response)=>{
        if(response.status === 200){
            dispatch({type:LOGIN_SUCCESSED, data:response.data})
        }else{
            dispatch({type: LOGIN_FAILED})
        }
    }).catch((error)=>{
        dispatch({type: LOGIN_FAILED})
    });
}