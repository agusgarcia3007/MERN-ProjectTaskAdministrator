import React, {useReducer} from 'react';
import TaskContext from './TaskContext';
import TaskReducer from './TaskReducer';


const TaskState = props => {
    const initialState ={
        tasks:[{name: 'Choose platform', completed: false, projectID: 1},{name: 'test app', completed: true, projectID: 2}],
        
    }   

    const [state, dispatch ] = useReducer(TaskReducer, initialState);

    return(
        <TaskContext.Provider>
            {props.children}
        </TaskContext.Provider>
    )
}

export default TaskState;