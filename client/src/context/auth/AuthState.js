import axios from 'axios';
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

    const signUp = async data => {
        try {
            const url = 'http://localhost:4000/api/users'
            const resp = await axios.post(url, data);
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

        }
        try {
            const resp = await axios.get('http://localhost:4000/api/auth');
            
        } catch (error){
            dispatch({
                type: ERROR_LOGIN
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