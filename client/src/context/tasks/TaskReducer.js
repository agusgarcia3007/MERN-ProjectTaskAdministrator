import { GET_TASKS, ADD_TASK, DELETE_TASK, CURRENT_TASK, UPDATE_TASK } from "../../types";


const Func =  (state, action) => {
    switch(action.type){
        case ADD_TASK :
            return{
                ...state,
                projectTask: [action.payload, ...state.projectTask]
            }
        case GET_TASKS :
            return{
                ...state,
                projectTask: action.payload
            }
        case DELETE_TASK :
            return{
                ...state,
                projectTask : state.projectTask.filter(task => task._id !== action.payload)
            }
        case UPDATE_TASK :
            return{
                ...state,
                projectTask: state.projectTask.map( task => task._id === action.payload._id ? action.payload : task),
                chosenTask : null
            }
        case CURRENT_TASK :
            return{
                ...state,
                chosenTask: action.payload
            }
        
        default:
            return state;
    }
}

export default Func;