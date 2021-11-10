import React, { useReducer } from 'react'
import { OK_SIGNUP, ERROR_SIGNUP, OK_LOGIN, ERROR_LOGIN, GET_USERNAME, SIGN_OUT } from '../../types'
import authContext from './authContext';
import authReducer from './authReducer';
import tokenAuth from '../../config/tokenAuth'
import axiosClient from '../../config/axios';


const AuthState = props => {
    
    const initialState = {
        token: localStorage.getItem('token'),
        authenticated: null,
        user: null,
        msg: null
    }

    const [ state, dispatch ] = useReducer(authReducer, initialState);


    //fn

    const signUp = async data => {
        try {
            
            const resp = await axiosClient.post('/api/users', data);
            console.log(resp.data);
            dispatch({
                type: OK_SIGNUP,
                payload: resp.data
            });

            //get user
            userAuthenticated();
        } catch (error) {
            console.log(error.response);
            const alert = {
                msg: error.response.data.msg,
                category: 'alerta-error'
            }

            dispatch({
                type: ERROR_SIGNUP,
                payload: alert
            })
        }
    }

    //return authed user
    const userAuthenticated = async () => {
        const token = localStorage.getItem('token');
        if(token){
            tokenAuth(token);
        }
        try {
            const resp = await axiosClient.get('/api/auth');

            //dispatch
            dispatch({
                type: GET_USERNAME,
                payload: resp.data.user
            })
            
        } catch (error){
            dispatch({
                type: ERROR_LOGIN
            })
        }
    };

    //login
    const login = async data => {
        try {

            const resp = await axiosClient.post('/api/auth', data);
            console.log(resp)

            
        } catch (error) {
            
                const alert = {
                msg: error.response.data.msg,
                category: 'alerta-error'
            }

            dispatch({
                type: ERROR_LOGIN,
                payload: alert
            })
        }

        }
    


    return(
        <authContext.Provider
            value={{
                token: state.token,
                authenticated: state.authenticated,
                user: state.user,
                msg: state.msg,
                signUp
            }}
        >
            {props.children}
        </authContext.Provider>

    )
}
export default AuthState