import React, {useReducer} from 'react';
import {login, loginGoogle, signout} from '../action/authentication-action';
import {reducer} from '../reducer/authentication-reducer';

const AuthenticationContext = React.createContext();
const initialState = {
  isAuthenticated: false,
  userInfo: null,
  token: null,
  errorMessage: null,
};

const AuthenticationProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AuthenticationContext.Provider
      value={{
        state,
        login: login(dispatch),
        signout: signout(dispatch),
        loginGoogle: loginGoogle(dispatch),
      }}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export {AuthenticationProvider, AuthenticationContext};
