import { OK_SIGNUP, ERROR_SIGNUP, OK_LOGIN, ERROR_LOGIN, GET_USERNAME, SIGN_OUT } from '../../types'

const RedAuth = (state, action) => {
    switch (action.type) {
        case OK_SIGNUP:
            localStorage.setItem('token', action.payload.token)
            return{
                ...state,
                authenticated: true,
                msg: null
            }
        case GET_USERNAME:
            return{
                ...state,
                user: action.payload
            }
        case ERROR_LOGIN:
        case ERROR_SIGNUP:
            localStorage.removeItem('token');
            return{
                ...state,
                token: null,
                msg: action.payload
            }
        default:
            return state;
    }
}

export default RedAuth