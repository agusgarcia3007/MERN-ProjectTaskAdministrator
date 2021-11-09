import { SHOW_ALERT, HIDE_ALERT } from '../../types'

const Red = (state, action) => {
    switch (action.type) {
        case SHOW_ALERT :
            return{
                alert : action.payload
            }
        case HIDE_ALERT :
            return {
                alerta: null
            }
        default:
            return state;
    }
}

export default Red