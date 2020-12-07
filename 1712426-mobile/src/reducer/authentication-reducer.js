import LOGIN_SUCCESSED from "../action/authentication-action"
import LOGIN_FAILED from "../action/authentication-action"
export const reducer = (prevState, action) => {
    switch(action.type){
        case LOGIN_SUCCESSED:
            return {...prevState, isAuthenticated: true, token:action.data.token, userInfo: action.data.userInfo}
        case LOGIN_FAILED:
            return {...prevState, isAuthenticated: false}
        default:
            throw new Error();
        }
}