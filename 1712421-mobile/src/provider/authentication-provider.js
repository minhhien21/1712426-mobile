import React, {useReducer} from 'react';
import { login } from '../action/authentication-action'
import { reducer } from '../reducer/authentication-reducer';

const AuthenticationContext = React.createContext();
const initialState = {
    isAuthenticated: false,
    userInfo: null,
    token: null,
}

const AuthenticationProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return( 
    <AuthenticationContext.Provider value={{state, login: login(dispatch)}}>
        {children}
    </AuthenticationContext.Provider>)
};

export {AuthenticationProvider, AuthenticationContext}