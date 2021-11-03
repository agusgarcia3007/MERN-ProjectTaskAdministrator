import { GET_TASKS, ADD_TASK, DELETE_TASK } from "../../types";


const Func =  (state, action) => {
    switch(action.type){
        case ADD_TASK :
            return{
                ...state,
                tasks: [...state.tasks, action.payload]
            }
        case GET_TASKS :
            return{
                ...state,
                projectTask: state.tasks.filter(task => task.projectID === action.payload)
            }
        case DELETE_TASK :
            return{
                ...state,
                tasks : state.tasks.filter(task => task.id !== action.payload)
            }
        default:
            return state;
    }
}

export default Func;