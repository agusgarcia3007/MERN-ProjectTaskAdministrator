import { OK_SIGNUP, ERROR_SIGNUP, OK_LOGIN, ERROR_LOGIN, GET_USERNAME, SIGN_OUT } from '../../types'

const RedAuth = (state, action) => {
    switch (action.type) {
        case OK_SIGNUP:
        case OK_LOGIN:
            localStorage.setItem('token', action.payload.token)
            return{
                ...state,
                authenticated: true,
                msg: null,
                loading: false
            }
        case GET_USERNAME:
            return{
                ...state,
                authenticated: true,
                user: action.payload,
                loading: false
            }
        case SIGN_OUT:
        case ERROR_LOGIN:
        case ERROR_SIGNUP:
            localStorage.removeItem('token');
            return{
                ...state,
                token: null,
                user: null,
                authenticated: null,
                msg: action.payload,
                loading: false
            }
        default:
            return state;
    }
}

export default RedAuth