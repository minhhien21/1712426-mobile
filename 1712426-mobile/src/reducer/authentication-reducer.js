import { LOGIN_FAILED, LOGIN_REQUEST, LOGIN_SUCCESSED, SIGNOUT_SUCCESSED } from "../action/authentication-action";
export const reducer = (prevState, action) => {
    switch(action.type){
        case LOGIN_REQUEST:
            return {...prevState, isAuthenticated: true}
        case LOGIN_SUCCESSED:
            return {...prevState, isAuthenticated: true, token:action.data.token, userInfo: action.data.userInfo, errorMessage: null}
        case LOGIN_FAILED:
            return {...prevState, isAuthenticated: false, errorMessage:action.data.message}
        case SIGNOUT_SUCCESSED:
            return {...prevState, isAuthenticated: false}
        default:
            throw new Error();
        }
}