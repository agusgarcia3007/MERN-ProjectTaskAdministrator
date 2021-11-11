import { PROJECT_FORM,GET_PROJECTS, ADD_PROJECT, CLOSE_FORM, VALIDATE_FORM, CURRENT_PROJECT, DELETE_PROJECT, PROJECT_ERROR } from "../../types";

const fnReducer = (state, action) => {
    switch (action.type){
        case PROJECT_FORM:
            return{
                ...state,
                form: true
            }
        case CLOSE_FORM :
            return{
                ...state,
                form : false,
                error : false
            }
        case GET_PROJECTS :
            return{
                ...state,
                projects : action.payload
            }
        case ADD_PROJECT :
            return{
                ...state,
                projects : [...state.projects, action.payload],
                form:false,
                error: false
            }
        case VALIDATE_FORM:
            return{
                ...state,
                error: true
            }
        case CURRENT_PROJECT:
            return{
                ...state,
                project: state.projects.filter(project => project._id === action.payload)
            }
        case DELETE_PROJECT:
            return{
                ...state,
                projects: state.projects.filter(project => project._id !== action.payload),
                project: null

            }
        case PROJECT_ERROR:
            return{
                ...state,
                msg: action.payload
            }
        default:
             return state
    }
}

export default fnReducer;