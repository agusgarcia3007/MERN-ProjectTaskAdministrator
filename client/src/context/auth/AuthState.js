import React, { useReducer } from 'react'
import { OK_SIGNUP, ERROR_SIGNUP, OK_LOGIN, ERROR_LOGIN, GET_USERNAME, SIGN_OUT } from '../../types'
import authContext from './authContext';
import authReducer from './authReducer';


const AuthState = props => {
    
    const initialState = {
        token: localStorage.getItem('token'),
        authenticated: null,
        user: null,
        msg: null
    }

    const [ state, dispatch ] = useReducer(authReducer, initialState);


    //fn



    return(
        <authContext.Provider
            value={{
                token: state.token,
                authenticated: state.authenticated,
                user: state.user,
                msg: state.msg
            }}
        >
            {props.children}
        </authContext.Provider>

    )
}
export default AuthState